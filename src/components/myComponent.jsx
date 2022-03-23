// myComponent.js
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import ChildComponent from "./Child";
import "../assets/styles/components/myComponent.css";
import React from 'react';

const Component = () => {

	const data = [
		"https://ih1.redbubble.net/image.1057190214.1918/flat,750x1000,075,f.u1.jpg",
		"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
		"https://img2.freepng.es/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg",
		"https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png",
		"https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
		"https://assets.puzzlefactory.pl/puzzle/205/866/original.jpg",
		"https://avatars.githubusercontent.com/u/17189275?s=280&v=4",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKSqZ2hV7xvg0P_xcQSzOn30fjKSJMYDtdblAHoVUCh1lecSrHLlG5zWhlBKfFuRDk7s&usqp=CAU",
		"https://firebase.google.com/images/brand-guidelines/logo-vertical.png?hl=es",
		"https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
		"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ndjjv1cj4s32fp8fwslu",
		"https://c0.klipartz.com/pngpicture/10/113/gratis-png-django-desarrollo-web-framework-web-python-software-framework-django-thumbnail.png",
		"https://images.youracclaim.com/images/ad9ad44b-54b8-4916-ba10-7b131da0b732/capm-600px.png",
		"https://images.ctfassets.net/1khq4uysbvty/2MbBsf9yEw40SMw6gK0Mmg/35f39d41f167b6615bd80517b4b67bcd/1_6XgfDCVn81AYX68Xvd2I-g_2x.png",
		"https://hackernoon.com/hn-images/1*rW03Wtue71AKfxnx6XN_iQ.png",
		"https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
		"https://tesigo-comunnitymanager.com/wp-content/uploads/2020/10/J5Yt92WW_400x400.png",
		"https://media-exp1.licdn.com/dms/image/C4D0BAQGzuSBRRRuphw/company-logo_200_200/0?e=2159024400&v=beta&t=Rh5mO2IXBXf7-0BK0CAqkcBipZtgpLe4Oo2ZE7c0T_Y",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
		"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
		"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
		"https://www.digitalfactory.ec/img/tech/dart.png",
		"https://upload.wikimedia.org/wikipedia/commons/1/10/MS_Project_Logo.png",
		"https://www.cadservices.co.uk/images/revit-badge-2017.png",
		"https://i.pinimg.com/564x/82/3b/c3/823bc30ace166100e32761868812db24.jpg",
		"https://comunidadblogger.net/wp-content/uploads/2019/12/Wordpress.png",
	];
	const options = {
		size: 100,
		minSize: 100,
		gutter: 30,
		provideProps: true,
		numCols: 6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		// showGuides: true,
		compact: false,
		gravitation: 5
	}
	const children = data.map((data, i) => {
		return <ChildComponent data={data} className="child" key={i} />
	});
	return (
		<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>
	);
};


export default Component;
