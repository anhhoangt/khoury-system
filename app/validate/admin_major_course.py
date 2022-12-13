from wtforms import Form, StringField
from wtforms.validators import Regexp


class AdminMajorCourseForm(Form):
    # 专业编号为3位数字
    major_id = StringField(validators=[Regexp(regex=r'^[0-9]{3}$', message='The major number should be 3 digits.')])
    # 课程编号为5位数字
    course_id = StringField(validators=[Regexp(regex=r'^[0-9]{5}$', message='The course number should be 3 digits.')])
