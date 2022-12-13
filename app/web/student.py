from . import web
from flask import request, render_template, redirect, url_for
from flask import jsonify
from app.validate.student import GetStudentInformationForm
from app.models.student import StudentReader, StudentCoursesReader
from app.web.general import transform_errors
from flask_login import login_required, current_user
from app.validate.general import check_authority
from app.models.general import connect_to_sql

@web.route('/student/information')
@login_required
def get_student_information():
    form = GetStudentInformationForm(request.args)  # 验证请求参数
    if form.validate():  # 如果通过验证
        student_id = form.student_id.data
        authority = check_authority('student', student_id)
        if authority.get('error'):
            return jsonify(authority), 404
        student = StudentReader(student_id)  # 从数据库读取学生信息
        # 若包含error字段，则读取失败，否则读取成功
        return jsonify(student.data), 404 if student.data.get('error') else 200
    else:  # 如果未通过验证
        return jsonify(transform_errors(form.errors)), 404


@web.route('/student/courses_selected')
@login_required
def get_student_courses_selected():
    form = GetStudentInformationForm(request.args)
    if form.validate():
        student_id = form.student_id.data
        authority = check_authority('student', student_id)
        if authority.get('error'):
            return jsonify(authority), 404
        student_courses = StudentCoursesReader(student_id)
        return jsonify(student_courses.data), 404 if student_courses.data.get('error') else 200
    else:
        return jsonify(transform_errors(form.errors)), 404


@web.route('/student/course_info')
@login_required
def get_student_course_info():
    connection = connect_to_sql()
    results = None
    try:
        with connection.cursor() as cursor:
            sql = 'select c.course_id, c.course_name, c.YEAR, c.semester, t.teacher_name, c.credit ' \
                  'from course as  c, teacher  as t ' \
                  'WHERE c.teacher_id = t.teacher_id; ' 

            cursor.execute(sql)
            results = cursor.fetchall()
    except Exception as e:
        print(str(e))
    finally:
        connection.close()
    return render_template('Course_Info.html', results =results)

@web.route('/student/addcourse/<id>')
@login_required
def student_addcourse(id):
    connection = connect_to_sql()
    data = {}
    try:
        print(current_user.true_id)
        student_id = current_user.true_id
        with connection.cursor() as cursor:
            sql = "insert into student_course (`student_id`,`course_id`) values ('{}','{}')".format(student_id, id)
            print(sql)
            cursor.execute(sql)
            connection.commit()
 
    except Exception as e:
        print(str(e))
        connection.rollback()
    finally:
        connection.close()
    return redirect(url_for('web.get_student_course_list'))

@web.route('/student/delcourse/<id>')
@login_required
def student_delcourse(id):
    connection = connect_to_sql()
    try:
        student_id = current_user.true_id
        with connection.cursor() as cursor:
            sql = "delete from student_course where student_id ='{}' and course_id='{}'".format(student_id, id)
            print(sql)
            cursor.execute(sql)
            connection.commit()
    except Exception as e:
        print(str(e))
        connection.rollback()
    finally:
        connection.close()
    return redirect(url_for('web.get_student_course_list'))

@web.route('/student/course_list')
@login_required
def get_student_course_list():
    connection = connect_to_sql()
    results = None
    try:
        student_id = current_user.true_id
        with connection.cursor() as cursor:
            sql = 'select c.course_id, c.course_name, c.YEAR, c.semester, t.teacher_name, c.credit ' \
                  'from course as  c, teacher  as t , student_course s ' \
                  'WHERE c.teacher_id = t.teacher_id and s.student_id = "{}"  ' \
                   'and c.course_id = s.course_id'.format(student_id)
            print(sql)
            cursor.execute(sql)
            results = cursor.fetchall()
    except Exception as e:
        print(str(e))
    finally:
        connection.close()
    return render_template('My_Course.html', results =results)