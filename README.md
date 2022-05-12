#  2019 Web programming assignment: MyWallet

![image](https://github.com/CynthiaYLiu/midtern_MyWallet/blob/master/client/src/img/title_pic.png)

### Introduction
Efficiently tracking each expense. You can record expense or income with time, amount and category. It can be sorted by timeline and shows the balance.

### Not Deployed

### Framework
* CLIENT: React
* SERVER: Express, Node.js, MongeDB

### Usage
*  Client:

        cd client
        npm install
        npm start
        
*  Server:

        cd server
        npm install
        npm start
        
*  Use **Add** button to add new data
    *  Choose different mode : income/expenses 
    *  Choose different type 
    *  Enter spending amount
    *  Enter the date and detail

*  Use **Clear** button to clear all data

*  Use **Left** and **right** buttons to check the spending of different month


        
### Refernce
*  Material UI
*  TODOlist(Practice04)

### Contribution
除了架構有借用部分Material UI和TODOlist的樣子（自己也刻了很多css），其他功能都是自己做的，從前端到後端，react、node.js、使用mongoose都是自己從頭刻起，也使用了react router做不同頁面的切換，fetch做前後端的傳輸。

### 心得
從前端到後端都自己做的心得是非常累XD 做了真的滿久的，一開始笨還自己刻css，後來做一半才發現Material UI的好，而且還比自己寫的有質感很多，不過要用的順手也是需要花一段時間。我覺得處理最久的應該是router的問題，還有前後端傳輸上出現的bug，常常會有傳輸格式、接不到request的問題，原來要架設一個前後端完整的網站這麼不簡單，即使已經比一開始想的減少很多功能，還是花了好幾個半夜到早上debug。

