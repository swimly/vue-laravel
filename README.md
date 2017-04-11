``` bash
php artisan make:migration create_mytable  //创建migration
```
``` bash
[Illuminate\Database\QueryException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000
bytes (SQL: alter table `users` add unique `users_email_unique`(`email`))
[PDOException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000
bytes
```
解决如上报错：参考： (https://segmentfault.com/a/1190000008416200)[https://segmentfault.com/a/1190000008416200]
添加：
``` php
Schema::defaultStringLength(191);
```