import Header from "./components/Header";
import CardElement from "./components/Card";
import './App.css';
import Footer from "./components/Footer";
import CardGroup from 'react-bootstrap/CardGroup';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
       <Header title="Galleria Personal"/>
        <CardGroup>
       <CardElement 
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/10974266_1596995797203800_7407760401766987678_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=dk3ydNpHxCYAX-B9X8A&_nc_ht=scontent.fscl12-1.fna&oh=00_AT_y4EICwc7zK7C9iVG37NMM28RaIt1bwbI-nxXesVxaJA&oe=63255DE2"
              alt="fondo negro en el cetro se puede ver un vitral redondo dividido en 8 partes iguales, rodeandolo se aprecias pequeñas luces en puntos"
              title="Vitral" 
              text="Tomada en algun lugar de barrio Lastarria - Santiago de Chile"             
            />
            <CardElement 
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/10989340_1596995567203823_1561378533877568641_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=CV7hxD-tc_UAX9Ed8aA&_nc_ht=scontent.fscl12-1.fna&oh=00_AT_JANFgRvADRFC5nd_J33NBgw9tj8j3INKCWTDXm9ziiA&oe=6323F043"
              alt="escultira metalida de un grupo de figuras humanas todas de color verde oscuro en el fondo se aprecia un muro de ladrillos"
              title="Sociedad" 
              text="Tomada en una galleria de Punta Arenas - Chile "             
            />
            <CardElement 
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/10974709_1596995143870532_2607135677105430832_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Hn8RLgvskCYAX-d8hHY&_nc_ht=scontent.fscl12-1.fna&oh=00_AT905cEqSmxvWrER_QEouo_QBRKpuGKpr9W9xEE8VpWF0A&oe=6326CEDD"
              alt="foto tomada desde el interior de un tronco hueco, al final se logra aprecias un paisaje con un rio, llanuras y cerros"
              title="Earth" 
              text="Tomada en Parque Nacional Torres del Paine - Chile" 
            /></CardGroup>
            <CardGroup>
            <CardElement
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/1014992_1570526893184024_5350906365390169720_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=CjtLrPCPpeUAX-Eyrzs&_nc_ht=scontent.fscl12-1.fna&oh=00_AT9E7h9W_sJbMB3mvdDmB-gtIcg4AJrjP75aknvapuJVag&oe=63275AD2"
              alt="se puede aprecias a un niño incado sobre una especie de cono amarillo hecho de platinas metalicas al alfondo se aprecia un toldo blanco y arboles "
              title="Atalaya" 
              text="Tomada en Parte de las Esculturas - Santiago de Chile " 
            />
            <CardElement 
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/13247751_1765021193734592_9030995577881684179_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=OpC3iiksJJsAX-S8Dze&tn=AJsaKt-PGv9xToKb&_nc_ht=scontent.fscl12-1.fna&oh=00_AT-nl9myXShKfkelP524kJ02VM8AD4DOoHNhMdvsK-yUvQ&oe=6324F1D3"
              alt="foto en blanco y negro de 3 niños el de mas a la derecha se escuentra apollado en el muro el de al medio incado y el de mas a la izquierda corriendo"
              title="Niñez" 
              text="Tomada en Museo Nacional de Historia Natural - Santiago de Chile" 
              
            />
            <CardElement
              src="https://scontent.fscl12-1.fna.fbcdn.net/v/t31.18172-8/13308274_1765020907067954_7919970723945599771_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=gCBMgm603HIAX_TNPi-&_nc_oc=AQli0rScZ4G0sV1VLCJND5u3vvv_jDmR6cby4riANaSfXGbA82ay6-38WopTEESJXQBR9KZu-L5cfqixs3NxLvvr&_nc_ht=scontent.fscl12-1.fna&oh=00_AT94B0jMzM0Vs9jecPNnYiy8SAPE4hy7n06FVjV5RxwlFQ&oe=63247C2E"
              alt="foto en blanco y negro en donde se ven ramas y  hojas totalmente negras el fondo aparece totalmente blancho pero a la derecha se ve la cupula de una iglecia"
              title="Ø" 
              text="Tomada en parque Quinta Normal - Santiago de Chile " 
            />
            </CardGroup>
       <Footer/>
    </div>
  );
}

export default App;
