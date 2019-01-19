        var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
        
        var arrayLetters = ['a','b','c','d','e','f','g','h'];
        
        var figure = {
            blackKing: '&#9818',
            blackQueen: '&#9819',
            blackRook: '&#9820',
            blackBishop: '&#9821',
            blackKnight: '&#9822',
            blackPawn: '&#9823',
            whiteKing: '&#9812',
            whiteQueen: '&#9813',
            whiteRook: '&#9814',
            whiteBishop: '&#9815',
            whiteKnight: '&#9816',
            whitePawn: '&#9817'
            
        };
        
        
        //блок для нашей шахматной доски
        var container_chess = document.createElement("div");
        container_chess.className = "container_chess";
        document.body.insertBefore(container_chess, document.body.firstChild);
        
        
        //блок для цифр и букв
        var num_let = document.createElement("div");
        num_let.className = "num_let";
        container_chess.appendChild(num_let);
        
        //врехние буквы
        var top_chess = document.createElement("div");
        top_chess.className = "top_chess";
        num_let.appendChild(top_chess);
        
        for (var i = 0; i <= (arrayLetters.length - 1 ); i++) {
            var letters = document.createElement("div");
            letters.className = "letters";
            letters.innerHTML = '<h4>'+arrayLetters[i]+'</h4>'; 
            top_chess.appendChild(letters);
        
        }
        
        //нижние буквы
        var bot_chess = document.createElement("div");
        bot_chess.className = "bot_chess";
        num_let.appendChild(bot_chess);
        
        for (var i = 0; i <= (arrayLetters.length - 1 ); i++) {
            var letters = document.createElement("div");
            letters.className = "letters";
            letters.innerHTML = '<h4>'+arrayLetters[i]+'</h4>'; 
            bot_chess.appendChild(letters);
        
        }
        
        //левые цифры
        var left_chess = document.createElement("div");
        left_chess.className = "left_chess";
        num_let.appendChild(left_chess);
        
        for (var i = (arrayLetters.length - 1 ); i >= 0; i--) {
            var numbers = document.createElement("div");
            numbers.className = "numbers";
            numbers.innerHTML = '<h4>'+arrayNumbers[i]+'</h4>'; 
            left_chess.appendChild(numbers);
        
        }
        
        //правые цифры
        var right_chess = document.createElement("div");
        right_chess.className = "right_chess";
        num_let.appendChild(right_chess);
        
        for (var i = (arrayLetters.length - 1 ); i >= 0; i--) {
            var numbers = document.createElement("div");
            numbers.className = "numbers";
            numbers.innerHTML = '<h4>'+arrayNumbers[i]+'</h4>'; 
            right_chess.appendChild(numbers);
        
        }
        
        // шахматная доска
        var tableNode = document.createElement("table");
        tableNode.className = "chessboard";
        container_chess.appendChild(tableNode);
        
        for (var i = (arrayNumbers.length - 1 ); i >= 0; i--) {
            var trNode = document.createElement("tr");
            trNode.className = "chessboard";
            tableNode.appendChild(trNode);
            
            for (var x = (arrayLetters.length - 1 ); x >= 0; x--) {
                var tdNode = document.createElement("td");
                tdNode.className = "chessboard";
                trNode.appendChild(tdNode);
            }
        } 
        
        // черные фигуры
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML = figure.blackRook;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML = figure.blackKnight;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[2].innerHTML = figure.blackBishop;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[3].innerHTML = figure.blackQueen;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[4].innerHTML = figure.blackKing;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[5].innerHTML = figure.blackBishop;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[6].innerHTML = figure.blackKnight;
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[7].innerHTML = figure.blackRook;
        
        for (var i = 0; i <= 7; i++) {
            document.getElementsByTagName("tr")[1].getElementsByTagName("td")[i].innerHTML = figure.blackPawn;
        }
        
        // белые фигуры
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[0].innerHTML = figure.whiteRook;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[1].innerHTML = figure.whiteKnight;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[2].innerHTML = figure.whiteBishop;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[3].innerHTML = figure.whiteQueen;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[4].innerHTML = figure.whiteKing;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[5].innerHTML = figure.whiteBishop;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[6].innerHTML = figure.whiteKnight;
        document.getElementsByTagName("tr")[7].getElementsByTagName("td")[7].innerHTML = figure.whiteRook;
        
        for (var i = 0; i <= 7; i++) {
            document.getElementsByTagName("tr")[6].getElementsByTagName("td")[i].innerHTML = figure.whitePawn;
        }
        
        