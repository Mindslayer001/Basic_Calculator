let flag=0;
        let output = document.getElementById("ot");
        function display(num){
            if (flag==1)
            {
                output.value="num";
                output.value=num;
                flag=0
            }
            else{
                output.value+= num;
            }    
        }

        function calculate(){
            try {
                output.value = eval(output.value);
                flag =1;
            }
            catch(err)
            {
                for (let i=0;i<50;i++)
                {
                output.value="Invalid";
                document.getElementById('ot').style.color="#B33A3A";
                }
                document.getElementById('ot').style.color="#000000";
                output.value="";
            }
        }

        function del(){
            output.value = output.value.slice(0, -1);      
        }
        
        function clr(){
            output.value = "";
        }