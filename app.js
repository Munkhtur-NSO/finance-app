


var uiController = (function() {
    console.log('helloo from uiController')
})();

var financeController = (function() {
    console.log('helloo from financeController')
})();

var appController = (function() {
    var ctrlAddItem = function() {
        //1. Оруулах өгөгдөл олж авна 
        //2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.
        //3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана
        //4. Төсвийг тооцолно
        //5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
        console.log("clicked");
    };
    document.querySelector('.add__btn').addEventListener("click", function(){
        ctrlAddItem();
    });
    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13) {
            ctrlAddItem();
        }
        
    })
    console.log('helloo from appController');
})();