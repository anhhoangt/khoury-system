import pymysql
import os
from flask import current_app

# db_user = os.environ.get('CLOUD_SQL_USERNAME')
# db_password = os.environ.get('CLOUD_SQL_PASSWORD')
# db_name = os.environ.get('CLOUD_SQL_DATABASE_NAME')
# db_connection_name = os.environ.get('CLOUD_SQL_CONNECTION_NAME')


def connect_to_sql():
    connection = pymysql.connect(host=current_app.config['DATABASE_HOST'], user=current_app.config['DATABASE_USER'],
                                 password=current_app.config['DATABASE_PASSWORD'],
                                 database=current_app.config['DATABASE_NAME'], port=current_app.config['DATABASE_PORT'],
                                 charset='utf8')

    return connection



