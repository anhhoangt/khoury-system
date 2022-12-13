from wtforms import Form, StringField
from wtforms.validators import Regexp, Length


class AdminSelectSingleMajorForm(Form):
    # 专业编号为3位数字
    major_id = StringField(validators=[Regexp(regex=r'^[0-9]{3}$', message='Major number should be 3 digits')])


class AdminUpdateMajorForm(Form):
    # 专业编号为3位数字
    major_id = StringField(validators=[Regexp(regex=r'^[0-9]{3}$', message='Major number should be 3 digits')])
    # 专业名称长度小于20
    major_name = StringField(validators=[Length(min=0, max=20, message='Major name is too long')])


class AdminInsertMajorForm(Form):
    # 专业名称长度小于20
    major_name = StringField(validators=[Length(min=0, max=20, message='Major name is too long')])
