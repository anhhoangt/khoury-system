from wtforms import Form, StringField
from wtforms.validators import Regexp


class StudentLoginForm(Form):
    student_id = StringField(validators=[Regexp(regex=r'^[0-9]{10}$', message='Student number should be 10 digits')])
    password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The password should be composed of 5~18 digits of numbers or letters')])


class StudentChangePasswordForm(Form):
    # 学生编号为10位数字
    student_id = StringField(validators=[Regexp(regex=r'^[0-9]{10}$', message='Student number should be 10 digits')])
    old_password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The old password should be composed of 5~18 digits of numbers or letters')])
    new_password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The new password should be composed of 5~18 digits of numbers or letters')])


class TeacherLoginForm(Form):
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])
    password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The password should be composed of 5~18 digits of numbers or letters')])


class AdminLoginForm(Form):
    password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The password should be composed of 5~18 digits of numbers or letters')])


class TeacherChangePasswordForm(Form):
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])
    old_password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The old password should be composed of 5-18 digits or letters.')])
    new_password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The new password should be composed of 5-18 digits or letters.')])


class AdminLoginForm(Form):
    password = StringField(validators=[Regexp(regex=r'^[0-9a-zA-Z]{5,18}$', message='The old password should be composed of 5~18 digits of numbers or letters')])
