from wtforms import Form, StringField
from wtforms.validators import Regexp, Length


class AdminSelectSingleTeacherForm(Form):
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='Teacher number should be 5 digits')])


class AdminUpdateTeacherForm(Form):
    # 教师编号为5位数字
    teacher_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='The teacher number should be 5 digits.')])
    # 教师姓名长度小于20
    teacher_name = StringField(validators=[Length(min=0, max=20, message='Student name is too long')])
    # 性别取值为男、女
    sex = StringField(validators=[Regexp(regex=r'^[M|F]$', message='Gender values are male and female')])
    # 出生年份为4为数字
    birth_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of birth should be 4 digits')])


class AdminInsertTeacherForm(Form):
    # 教师姓名长度小于20
    teacher_name = StringField(validators=[Length(min=0, max=20, message='Student name is too long')])
    # 性别取值为男、女
    sex = StringField(validators=[Regexp(regex=r'^[M|F]$', message='The sex value is male and female.')])
    # 出生年份为4为数字
    birth_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of birth should be 4 digits')])
