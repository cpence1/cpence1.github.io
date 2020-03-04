function PrintCard(){
    line1="<b>Name: </b>"+this.name+"<br>\n";
    line2="<b>Address: </b>"+this.address+"<br>\n";
    line3="<b>Work Phone: </b>"+this.workphone+"<br>\n";
    line4="<b>Home Phone: </b>"+this.homephone+"<hr>\n";
    document.write(line1,line2,line3,line4);
}
function Card(name,address,workphone,homephone){
    this.name=name;
    this.address=address;
    this.workphone=workphone;
    this.homephone=homephone;
    this.PrintCard=PrintCard;
}
sue=new Card("Sue S.", "123 Elm St.", "111-111-1111", "111-111-1112");
fred=new Card("Fred M.", "234 Oak Ln.", "222-222-2222", "222-222-2223");
henry=new Card("Henry T.", "103 Overlea Ave.","333-333-3333", "333-333-3334");
sue.PrintCard();
fred.PrintCard();
henry.PrintCard();
