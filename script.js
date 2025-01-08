let ans = ""; //storing what to display

const number = document.querySelectorAll(".num");

const show = document.querySelector(".show");

number.forEach(num => {
    num.addEventListener('click',numberClick);
});

function numberClick(num)
{
    if(ans.length < 13)
    {
        const press = num.target.id;
        const n  = press.slice(-1);
        ans+=n;
        show.textContent = ans;
    }
    
}


const clear = document.querySelector(".clear");
clear.addEventListener("click",() => 
{
    ans="";
    show.textContent = ans;
})

const divi = document.querySelector(".divide");
divi.addEventListener("click",cal);

const mul = document.querySelector(".mul");
mul.addEventListener("click",cal);

const sub = document.querySelector(".sub");
sub.addEventListener("click",cal);

const add = document.querySelector(".add");
add.addEventListener("click",cal);

function cal(e)
{
    let vhar = ans[-1];
    if(ans.length >=1 && ans.length <13 && vhar.charCodeAt(0) >= 48 && vhar.charCodeAt(0) <= 57)
    {
        const op = e.target.className;
        const a = "+";
        const b = "-";
        const c = "*";
        const d = "/";

        if(!ans.includes(a) && !ans.includes(b) && !ans.includes(c) && !ans.includes(d))
        {
            if(op==="divide")
            {
                ans+="/";
                show.textContent = ans;
            }
            if(op==="mul")
            {
                ans+="*";
                show.textContent = ans;
            }
            if(op==="add")
            {
                ans+="+";
                show.textContent = ans;
            }
            if(op==="sub")
            {
                ans+="-";
                show.textContent = ans;
            }
        
        }
        else
        {
            let op1 ="";
            let idx = 0;
            let opr = "";
            for(let i=0;i<ans.length;i++)
            {
                if(ans[i]==a || ans[i]==b || ans[i]==c || ans[i]==d)
                {
                    idx = i;
                    opr = ans[i];
                    break;
                }
                op1 += ans[i];
            }
            let op2 = "";
            for(let i=idx+1;i<ans.length;i++)
            {
                op2 += ans[i];
            }

            if(opr=="/")
            {
                op1 = parseFloat(op1);
                op2 = parseFloat(op2);
                let result =  op1 / op2;
                ans = result;
            }
            if(opr=="*")
            {
                op1 = parseFloat(op1);
                op2 = parseFloat(op2);
                let result =  op1*op2;
                ans = result;
            }
            if(opr=="+")
            {
                op1 = parseFloat(op1);
                op2 = parseFloat(op2);
                let result =  op1+op2;
                ans = result;
            }
            if(opr=="-")
            {
                op1 = parseFloat(op1);
                op2 = parseFloat(op2);
                let result =  op1-op2;
                ans = result;
            }

            if(op==="divide")
            {
                ans+="/";
                show.textContent = ans;
            }
            if(op==="mul")
            {
                ans+="*";
                show.textContent = ans;
            }
            if(op==="add")
            {
                ans+="+";
                show.textContent = ans;
            }
            if(op==="sub")
            {
                ans+="-";
                show.textContent = ans;
            }
            
            // alert(op1);
            // alert(op2);
            // show.textContent = ans;
        }
    }
    
}
