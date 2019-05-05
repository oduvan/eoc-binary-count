requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;

        var io = new extIO({
            animation: function($expl, data){
                if (!data.ext) {return;}
                var explanation = data.ext["explanation"]
                for (var i = 0; i < explanation.length; i++) {
                    var $span = $("<span></span>").text(explanation[i]);
                    if (explanation[i] === "1") {
                        $span.addClass("unity");
                    }
                    $expl.append($span);
                }

            },
            functions: {
                js: 'binaryCount',
                python: 'binary_count'
            }
        });
        io.start();
    }
);
