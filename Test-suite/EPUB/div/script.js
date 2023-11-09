const literals = (function($){
    return {
        test: function () {
            return 'Hello world!';
        }
    };
})(jQuery);

console.log(literals.test());