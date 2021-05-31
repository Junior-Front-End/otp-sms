var Kavenegar = require('kavenegar');

var api = Kavenegar.KavenegarApi({
    apikey: 'YOUR-API-KEY'
});

api.Send({
        message: "این یک پیام آزمایشی است.",
        sender: "10004346",
        receptor: "YOUR-MOBILE-NUMBER"
    },
        function(response, status) {
        console.log(response);
        console.log(status);
    });