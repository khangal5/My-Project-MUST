Түүхэн Дурсгалууд Апп

React дээр хийсэн 3D загвартай түүхэн дурсгалын мэдээллийн апп.

📌 Функцууд

Дурсгалуудыг жагсаалтаар харах

Location, Era, Description харах

3D Model үзэх

Сэтгэгдэл бичих (XSS хамгаалалттай)

Хар/цагаан theme

Multilingual (i18next)

🚀 Суулгах заавар
git clone <repo>
cd project
npm install
npm start

📁 Фолдерын бүтэц
src/
│── components/
│ └── ModelView/ModelViewer.jsx
│── data/
│ └── monuments.json
│── pages/
│ └── Detail.jsx
│── App.jsx
│── index.js

📌 Технологиуд

React

React Router

i18next

Three.js Model Viewer

CSS Modules

🔐 Аюулгүй байдал

XSS хамгаалалт: HTML escape

URL параметр шалгалт

Dangerous HTML ашиглаагүй

🧪 Гүйцэтгэлийн тест

Python script ажиллуулах:

python performance-test/test_performance.py

👥 Орлого

Хүдэр — Frontend

Хангал — Дизайн/Контент
