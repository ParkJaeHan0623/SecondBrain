# MySQL
# [[DataBase(데이터베이스)]] 백업/복구
### 내보내기
==mysqldump -u계정아이디 -p백업할DB이름 > 백업파일경로==
>예시
~~~
mysqldump -u root -p sony > /Users/parkjaehan/Coding/SonyStore/sony_database/sony_database.sql
~~~
### 복원하기
==mysql -u계정아이디 -p복구할DB이름 < 백업파일경로==
>예시
~~~
mysql -u root -p sony < /Users/parkjaehan/Coding/SonyStore/sony_database/sony_database.sql
~~~

**이 명령어는 MySQL 접속 상태가 아닌일반 명령프롬프트 상태에서 실행해야 한다.**