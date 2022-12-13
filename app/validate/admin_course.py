from wtforms import Form, StringField, IntegerField
from wtforms.validators import Regexp, Length, NumberRange


class AdminSelectSingleCourseForm(Form):
    # 课程编号为5位数字
    course_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='The course number should be 5 digits')])


class AdminUpdateCourseForm(Form):
    # 课程编号为5位数字
    course_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='The course number should be 5 digits')])
    # 课程名称长度小于120
    course_name = StringField(validators=[Length(min=0, max=120, message='The course name is too long')])
    # 开课年份为4为数字
    year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The starting year should be 4 digits')])
    # 专业取值为春、
    semester = StringField(validators=[Regexp(regex=r'^[S|F]$', message='Semester values are spring and fall')])
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])
    # 学分在1~10之间
    credit = IntegerField(validators=[NumberRange(min=1, max=10, message='Credits should be between 1 and 10')])


class AdminInsertCourseForm(Form):
    # 课程名称长度小于120
    course_name = StringField(validators=[Length(min=0, max=120, message='Course name is too long')])
    # 开课年份为4为数字
    year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The starting year should be 4 digits')])
    # 专业取值为春、秋
    semester = StringField(validators=[Regexp(regex=r'^[S|F]$', message='Semester values are spring and fall')])
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])
    # 学分在1~10之间
    credit = IntegerField(validators=[NumberRange(min=1, max=10, message='The credits should be between 1 and 10.')])
