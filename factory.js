/**
 *
 * Created by 肉仔强 on 14-2-20.
 */

var myApp = angular.module('myApp', []);
myApp.factory('TotalDatas', function() {
    var totalDatas = {};
    totalDatas.datas = [
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'},
        {a:1,b:'初雪',c:'http://pianogarden.github.io/video/1.html',d:'城之内美莎',e:['钢琴','柔美'],f:'日本',g:['城之内美莎'],h:'image/1.jpg'},
        {a:2,b:'童年',c:'http://pianogarden.github.io/video/2.html',d:'恩田直幸',e:['钢琴','流畅'],f:'日本',g:['恩田直幸'],h:'image/2.jpg'},
        {a:3,b:'爱回家',c:'http://pianogarden.github.io/video/3.html',d:'久石让',e:['钢琴','唯美' ,'动漫歌曲'],f:'日本',g:['久石让'],h:'image/3.jpg'},
        {a:4,b:'杨柳',c:'http://pianogarden.github.io/video/4.html',d:'林海',e:['钢琴','中国风'],f:'中国',g:['林海','范宗沛'],h:'image/4.jpg'},
        {a:5,b:'黎明',c:'http://pianogarden.github.io/video/5.html',d:'贾鹏芳',e:['二胡','柔美'],f:'中国',g:['贾鹏芳'],h:'image/5.jpg'},
        {a:6,b:'听水滴在跳舞',c:'http://pianogarden.github.io/video/6.html',d:'姜小青',e:['古筝','柔美'],f:'中国',g:['姜小青','古筝'],h:'image/6.jpg'},
        {a:7,b:'夜莺',c:'http://pianogarden.github.io/video/7.html',d:'雅尼',e:['钢琴','电子乐'],f:'美国',g:['雅尼'],h:'image/7.jpg'},
        {a:8,b:'初恋',c:'http://pianogarden.github.io/video/8.html',d:'西村由纪江',e:['钢琴','柔美'],f:'日本',g:['西村由纪江'],h:'image/8.jpg'},
        {a:9,b:'火宵之月',c:'http://pianogarden.github.io/video/9.html',d:'中村由纪子',e:['钢琴','柔美'],f:'日本',g:['中村由纪子'],h:'image/9.jpg'},
        {a:10,b:'樱花飞舞时',c:'http://pianogarden.github.io/video/10.html',d:'中岛美嘉',e:['唯美','柔美'],f:'日本',g:['中岛美嘉'],h:'image/10.jpg'}
    ];
    return totalDatas;

})
myApp.factory('AllInstruments', function (TotalDatas) {
    var all = [];
    for (var i = 0; i < TotalDatas.datas.length; i++) {
        var u = TotalDatas.datas[i].e;
        for (var j = 0; j < u.length; j++) {
            all.push(u[j]);
        }
    }

    function unique(arr) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (ret.indexOf(item) === -1) {
                ret.push(item);
            }
        }
        return ret
    }
    console.log('all:', unique(all));
    return unique(all);
});
myApp.factory('AllAuthor', function (TotalDatas) {
    var all = [];
    var data = TotalDatas.datas;
    for (var i = 0; i < data.length; i++) {
            all.push(data[i].d);
            console.log(data[i].d);
    }

    function unique(arr) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (ret.indexOf(item) === -1) {
                ret.push(item);
            }
        }
        console.log('ret:',ret);
        return ret
    }
    return unique(all);
});