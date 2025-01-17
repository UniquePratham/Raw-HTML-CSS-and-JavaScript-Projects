// console.log("Hello Cuties");

const http = require('http');

//Creating & Assigning localhost
const hostname = '127.0.0.1';
//Creating & Assigning port number
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Events</title>
    </head>
    <style>
        body {
            background-color: black;
            text-align: center;
        }
    
        #heading {
            color: darkslategray;
            font-size: 3rem;
            text-shadow: 1.5px 1px white;
        }
    
        #btn {
            background-color: goldenrod;
            border: 3px solid silver;
            cursor: pointer;
            border-radius: 8px;
            padding: 10px 15px;
            margin: 10px;
            font-size: 1rem;
            color: silver;
            text-shadow: 1px 1px black;
            font-weight: bold;
        }
        #btn:hover{
            background-color: silver;
            border: 3px solid goldenrod;
            transform: scale(1.5);
            color: goldenrod;
    
        }
        #para{
            color: greenyellow;
            text-shadow: 0.5px 0.5px white;
        }
    </style>
    
    <body>
        <!-- Browser-events :- -->
        <!-- Event has occured or Event has fired means Events Happened -->
        <!-- 1.click :- Left Click of Mouse or Touchpad-->
        <!-- 2.contextmenu :- Right Click of Mouse or Touchpad -->
        <!-- 3.mouseOver / mouseOut :- lly, first one means taking mouse upon something & second one means removing mouse from over something  -->
        <!-- 4.mouseDown / mouseUp :- lly, first one means it activates when clicking a button and be activated till it is clicked, it is down-fired. and second one means it activates just after releasing the button when unclicked, it is up-fired -->
        <!-- 5.submit :- this is the basic form events needed while submitting a form -->
        <!-- 6.focus :- this is needed in form's when input tags are focus or something like that;  -->
        <!-- 7.DOMContentLoaded :-When full HTMl DOM loads, Then it fires    -->
        <!-- 8.transitionend :- occurs when a CSS transition has completed -->
        <div class="container">
            <h1 id="heading">This is my heading with Long Paragraph</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, magnam harum. Pariatur harum
                fugiat sit mollitia ducimus veniam reiciendis, necessitatibus at?</p>
            <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe asperiores, consectetur
                minus cum molestias illum neque debitis voluptatem natus earum ullam quam quis veniam architecto eligendi
                praesentium fugit sequi totam tempora ipsum harum molestiae. Possimus error quas atque aliquam fugiat
                accusamus corporis perferendis totam provident repellendus mollitia, ipsa, excepturi repudiandae aut saepe!
                Aliquam accusantium mollitia sed laboriosam cupiditate soluta quasi ut ullam accusamus alias officia vero
                excepturi ipsa temporibus, quae magnam tenetur commodi molestias reprehenderit dolores ea ex adipisci. Eum
                voluptatibus itaque, consequatur recusandae quas praesentium eaque quis nostrum deserunt quibusdam
                voluptates iste, cumque, provident aut consectetur natus ducimus assumenda? Nesciunt, hic exercitationem
                fugiat ad enim quia est esse incidunt fuga minima eius, pariatur repellat odit error rem, libero neque
                animi! Quisquam harum facere exercitationem consequatur ad doloribus porro inventore vitae eos. Totam fugit
                doloribus nam at ipsa earum ex, illo officia non eum repellat? Repellendus quidem impedit rem voluptas
                nostrum, illum odit enim? Sint sed illum provident distinctio dolores maiores iusto culpa, hic tenetur animi
                ad. Tempore voluptatem expedita dolor, corporis deleniti dicta eligendi enim sunt excepturi facilis
                repudiandae reprehenderit a laborum ex veritatis labore iste sed? Necessitatibus, pariatur facilis
                perferendis aliquid, similique vero ex tempora rerum nobis, ullam veniam? Amet iure accusamus modi neque
                iste culpa officiis harum totam tempore quas omnis fugit esse error, facilis sint dolor ratione sit
                veritatis beatae corrupti quam nobis voluptatibus? Facere..</p>
            <button id="btn" onclick="toggleHide()">Show/Hide</button>
        </div>
        <script>
            let para = document.getElementById('para');
            para.addEventListener('mouseover',function run(){
                console.log('Mouse inside');
            });
            para.addEventListener('mouseout',function run(){
                console.log('Mouse now went outside');
            });
    
            function toggleHide() {
                let btn = document.getElementById('btn');
                let para = document.getElementById('para');
                let heading = document.getElementById('heading');
                if (para.style.display != 'none') {
                    heading.innerHTML="This is my heading with Short Paragraph"
                    para.style.display = "none";
                    heading.style.color="Orangered";
                    btn.style.color="goldenrod";
                    btn.style.backgroundColor="silver";
                    btn.style.border="3px solid goldenrod";
                }
                else {
                    heading.innerHTML="This is my heading with Long Paragraph"
                    para.style.display = "block";
                    para.style.color="orange";
                    para.style.textShadow="0.5px 0.5px white";
                    heading.style.color="darkslategray";
                    b.style.color="goldenrod";
                }
            }
        </script>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// _ IS THE LAST VARIABLE YOU ACCESS