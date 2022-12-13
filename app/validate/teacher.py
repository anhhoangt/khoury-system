from wtforms import Form, StringField, IntegerField
from wtforms.validators import Regexp, NumberRange


class GetTeacherInformationForm(Form):
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])


class GetCourseInformationForm(Form):
    # 课程编号为5位数字
    course_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])


class PostGradeInformationForm(Form):
    # 课程编号为5位数字
    course_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='The course number should be 5 digits.')])
    # 学生编号为10位数字
    student_id = StringField(validators=[Regexp(regex=r'^[0-9]{10}$', message='The student number should be 10 digits.')])
    # grade为0~100
    grade = IntegerField(validators=[NumberRange(min=0, max=100)])
