from wtforms import Form, StringField
from wtforms.validators import Regexp, Length


class UpdateStudentInformationForm(Form):
    # 学生编号为10位数字
    student_id = StringField(validators=[Regexp(regex=r'^[0-9]{10}$', message='Student number should be 10 digits')])
    # 学生姓名长度小于20
    student_name = StringField(validators=[Length(min=0, max=20, message='Student name is too long')])
    # 性别取值为男、女
    sex = StringField(validators=[Regexp(regex=r'^[M|F]$', message='Gender values are male and female')])
    # 出生年份为4为数字
    birth_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of birth should be 4 digits')])
    # 省份名称长度小于20
    province = StringField(validators=[Length(min=0, max=20, message='The province name is too long')])
    # 入学年份为4为数字
    enter_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of enrollment should be 4 digits')])
    # 专业编号为3位数字
    major_id = StringField(validators=[Regexp(regex=r'^[0-9]{3}$', message='Discipline number should be 3 digits')])


class InsertStudentInformationForm(Form):
    # 学生姓名长度小于20
    student_name = StringField(validators=[Length(min=0, max=20, message='Student name is too long')])
    # 性别取值为男、女
    sex = StringField(validators=[Regexp(regex=r'^[M|F]$', message='Gender values are male and female')])

    # 出生年份为4为数字
    birth_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of birth should be 4 digits')])
    # 省份名称长度小于20
    province = StringField(validators=[Length(min=0, max=20, message='The province name is too long')])
    # 入学年份为4为数字
    enter_year = StringField(validators=[Regexp(regex=r'^[0-9]{4}$', message='The year of enrollment should be 4 digits')])
    # 专业编号为3位数字
    major_id = StringField(validators=[Regexp(regex=r'^[0-9]{3}$', message='Discipline number should be 3 digits')])
