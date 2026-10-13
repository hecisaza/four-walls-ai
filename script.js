(function(){
"use strict";
var CONTACT_EMAIL = "contact@networkingdev.com"; // change here (and in index.html mailLink) to update

var ES = {
nav_demo:"Véalo",nav_services:"Servicios",nav_pricing:"Precios",nav_faq:"Preguntas",nav_cta:"Evaluación gratis",
hero_eyebrow:"IA privada para negocios de Oviedo y Florida Central",
hero_h1:"IA que nunca sale de su oficina.",
hero_lead:"Aproveche el ahorro de tiempo de la IA — resúmenes, borradores, respuestas al instante desde sus propios archivos — sin enviar información confidencial de sus clientes a un sitio web público. La instalamos dentro de su oficina, la configuramos y le damos soporte local.",
hero_cta:"Reserve su evaluación gratuita de IA",hero_cta2:"Pruebe la demostración",
hero_small:"Para bufetes de abogados, contadores (CPA) y preparadores de impuestos, consultorios médicos y dentales, asesores financieros, compañías de títulos y contratistas que manejan información sensible.",
tab_priv:"✓ IA privada (en su oficina)",tab_pub:"⚠ Sitio de IA público",
v_h:"Qué significa la IA privada para su negocio",v_p:"En pocas palabras: la IA trabaja para usted, dentro de su oficina, como cualquier otro equipo que usted posee.",
v1_h:"Sus archivos se quedan",v1_p:"Los archivos de sus clientes nunca salen de su oficina. Nada se sube a sitios externos.",
v2_h:"Cumplimiento más fácil",v2_p:"Le ayuda a cumplir sus obligaciones de confidencialidad y privacidad, porque ninguna empresa externa maneja los datos.",
v3_h:"Un costo mensual fijo",v3_p:"Una tarifa de soporte predecible, no una lista creciente de suscripciones de IA por persona.",
v4_h:"Funciona sin internet",v4_p:"La IA corre en un equipo dentro de su oficina, así que sigue funcionando durante un corte.",
v5_h:"Un experto local",v5_p:"Instalada, configurada y respaldada por alguien de Oviedo. En inglés o en español.",
d_h:"Vea lo que puede hacer",d_p:"Elija una tarea. Así la usaría su equipo todos los días — la respuesta se produce dentro de su oficina.",
d_badge:"Solo ilustración — texto de ejemplo, no es una IA en vivo",
doc_h:"Ejemplo: Contrato de arrendamiento comercial (ficticio)",
doc_body:"<p>Este Contrato se celebra entre Lakeside Holdings LLC (\"Arrendador\") y Bright Path Services Inc. (\"Arrendatario\") para el local en 100 Example Way, Suite 210.</p><p><b>1. Plazo.</b> Cinco (5) años, del 1 de marzo de 2027 al 28 de febrero de 2032.</p><p><b>2. Renta.</b> $4,200 mensuales, pagaderos el día 1. Recargo del 5% después del día 5. La renta aumenta 3% cada año.</p><p><b>3. Depósito.</b> $8,400, devuelto dentro de 30 días tras la salida, menos daños.</p><p><b>4. Renovación.</b> El Arrendatario puede renovar por un plazo de 5 años con aviso escrito al menos 180 días antes del vencimiento.</p><p><b>5. Terminación anticipada.</b> Después del año 3, con 6 meses de aviso y un cargo igual a 3 meses de renta.</p><p><b>6. Reparaciones.</b> El Arrendador mantiene techo, estructura y aire acondicionado. El Arrendatario, las reparaciones interiores.</p><p><b>7. Seguro.</b> El Arrendatario debe tener $1,000,000 de responsabilidad civil general nombrando al Arrendador como asegurado adicional.</p>",
t_sum:"Resumir este contrato",t_dates:"Encontrar fechas clave",t_email:"Redactar correo al cliente",t_es:"Explicarlo en inglés",
out_idle:"Lista — funcionando dentro de su oficina",out_hint:"← Elija una tarea para ver una respuesta de ejemplo.",
p_h:"El problema de “simplemente usar ChatGPT”",p_p:"Probablemente su personal ya quiere usar IA. La pregunta es a dónde va la información de sus clientes cuando lo hacen.",
p_bad_h:"Sitios de IA públicos",p_b1:"Los documentos viajan por internet a los servidores de otra empresa.",p_b2:"Usted depende de las configuraciones, políticas y personal de esa empresa.",p_b3:"Es difícil responder cuando un cliente o regulador pregunta “¿a dónde fueron mis datos?”",p_b4:"Suscripciones mensuales por persona que suben a medida que crece.",
p_good_h:"IA privada en su oficina",p_g1:"Los documentos se quedan en un equipo dentro de su oficina.",p_g2:"Usted decide quién la usa, y cada uso puede quedar registrado.",p_g3:"Una respuesta simple para sus clientes: “nunca salió de nuestra oficina”.",p_g4:"Un costo fijo mensual de soporte para todo el equipo.",
s_h:"Servicios",s_p:"Tres formas de empezar, según su tamaño y nivel de comodidad.",
s1_h:"IA privada en su oficina",s1_p:"Una computadora de IA compacta y silenciosa instalada en su oficina y conectada de forma segura a su red. Su equipo la usa desde sus propias computadoras como un sitio web, pero solo existe dentro de su oficina.",
s2_h:"IA privada alojada (local)",s2_p:"¿No está listo para comprar equipo? Use un servicio de IA privado en equipos dedicados aquí en Florida Central — no en una gran nube pública. Una buena forma de probar antes de instalar.",
s3_h:"Flujos de trabajo, capacitación y soporte",s3_p:"La configuramos para su trabajo real: resumir expedientes, primeros borradores, admisión de clientes y búsqueda en sus propios documentos. Luego capacitamos a su personal y la mantenemos actualizada y monitoreada.",
i_h:"Hecha para negocios que manejan información confidencial",
i1_h:"⚖️ Bufetes de abogados",i1_p:"Resuma deposiciones y contratos, redacte cartas, busque casos anteriores y prepare notas de admisión.",
i2_h:"🧾 Contadores y preparadores de impuestos",i2_p:"Organice documentos de clientes, redacte cartas de compromiso y correos, y responda preguntas desde sus propios archivos.",
i3_h:"🩺 Médicos y dentistas",i3_p:"Redacte cartas a pacientes, resuma referidos y agilice la admisión, con la información del paciente en el consultorio.",
i4_h:"📈 Asesores financieros",i4_p:"Prepare notas y resúmenes de reuniones y seguimientos a clientes sin subir sus datos financieros.",
i5_h:"🏠 Títulos y cierres",i5_p:"Revise paquetes de cierre, extraiga fechas y montos clave y redacte correspondencia de rutina.",
i6_h:"🛰️ Contratistas de defensa y tecnología",i6_p:"Trabaje con documentos técnicos sensibles en equipos que permanecen en sus instalaciones, sin nube externa.",
h_h:"Cómo funciona",h_p:"No necesita conocimientos técnicos.",
h1_h:"Evaluación gratuita",h1_p:"Una conversación de 30 minutos sobre cómo trabaja su oficina y dónde la IA le ahorraría tiempo.",
h2_h:"Propuesta clara",h2_p:"Un plan escrito con precio fijo de instalación, el equipo necesario y el costo mensual de soporte.",
h3_h:"Instalación y configuración",h3_p:"La instalamos, la aseguramos y la configuramos para sus flujos de trabajo — normalmente en pocas semanas.",
h4_h:"Capacitación y soporte",h4_p:"Capacitación práctica para su personal, y luego monitoreo, actualizaciones y ayuda cuando la necesite.",
pr_h:"Precios de referencia",pr_p:"Cada oficina es diferente; estos son puntos de partida. Recibirá una cotización fija por escrito después de la evaluación gratuita.",
pr1_h:"Piloto (alojado)",pr1_d:"Pruebe la IA privada sin comprar equipo.",pr1_a:"desde $300/mes",pr1_per:"mes a mes después de la configuración",pr1_l1:"IA privada en equipo local dedicado",pr1_l2:"Equipo pequeño, uso ligero",pr1_l3:"Fácil cambio a IA en su oficina",
pr2_h:"Inicial",pr2_d:"Oficinas pequeñas (1–10 personas aprox.).",pr2_a:"desde $5,000 instalación",pr2_per:"+ soporte desde $500/mes",pr2_l1:"Computadora de IA compacta en su oficina",pr2_l2:"Configuración segura de red",pr2_l3:"1–2 flujos de trabajo + capacitación",
pr_tag:"La más elegida",pr3_h:"Práctica",pr3_d:"Firmas en crecimiento (10–30 personas aprox.).",pr3_a:"desde $10,000 instalación",pr3_per:"+ soporte desde $1,200/mes",pr3_l1:"IA en oficina más potente",pr3_l2:"Búsqueda en los archivos de su firma",pr3_l3:"Varios flujos, controles de acceso",
pr4_h:"Empresarial",pr4_d:"Firmas grandes e instalaciones sensibles.",pr4_a:"desde $15,000 instalación",pr4_per:"+ soporte desde $2,500/mes",pr4_l1:"Equipo de IA de alta capacidad",pr4_l2:"Muchos usuarios y departamentos",pr4_l3:"Integraciones y reportes a medida",
pr_note:"El equipo es aparte: usted lo compra directamente (es suyo) o se lo suministramos al costo. Los sistemas compactos suelen empezar alrededor de $4,000–$7,000; firmas más grandes pueden necesitar más. Los proyectos a medida (ajustar la IA a sus documentos, pruebas comparativas) se cotizan por separado.",
pr_tag2:"",
a_h:"Sobre Hector Isaza",
a_p1:"Soy consultor de automatización de redes y seguridad en Oviedo, y trabajo a través de NetworkingDev. Por años he ayudado a grandes organizaciones a automatizar y asegurar sus redes y soy cofundador de Flow Weaver, una plataforma de automatización de redes.",
a_p2:"No solo recomiendo la IA privada: la uso. En mi propio laboratorio en Florida Central opero varias computadoras de IA que alimentan el asistente de IA que uso a diario, con monitoreo y un plan de respaldo para mantenimiento. También contribuyo a proyectos de código abierto que ayudan a correr IA en equipos compactos de oficina. Traigo esa experiencia práctica, con la seguridad como prioridad, a su oficina.",
a_f1:"Con base en Oviedo, FL",a_f2:"Experiencia en redes y seguridad",a_f3:"Usa IA privada a diario",a_f4:"Inglés y español",
f_h:"Preguntas frecuentes",
f1_q:"¿Mis datos salen alguna vez de mi oficina?",f1_a:"Con la opción en oficina, no. La IA corre en un equipo dentro de su oficina y se configura para que no sea accesible desde internet. Las actualizaciones se aplican en el horario que usted apruebe. Con el piloto alojado, los datos viajan por una conexión cifrada a equipos dedicados que operamos en Florida Central — no una nube pública — y le explicamos exactamente dónde están.",
f2_q:"¿Cumple con HIPAA? ¿Y con la confidencialidad abogado–cliente?",f2_a:"Ningún producto lo hace cumplir por sí solo — depende de cómo se configura y se usa. La IA privada lo hace mucho más simple, porque la información confidencial queda bajo su control. Para consultorios médicos y dentales podemos firmar un Acuerdo de Socio Comercial (BAA) cuando se requiera, y cada cliente recibe un acuerdo de confidencialidad por escrito. Configuramos controles de acceso y registros, y con gusto trabajamos con su asesor de cumplimiento o su proveedor de TI.",
f3_q:"¿Es tan inteligente como ChatGPT?",f3_a:"Para el trabajo diario de oficina — resúmenes, borradores, organizar información, responder preguntas desde sus archivos — la IA abierta de hoy es muy capaz. Se lo mostramos con documentos como los suyos durante la evaluación, para que usted juzgue antes de decidir.",
f4_q:"¿Cuánto cuesta comparado con las suscripciones de IA?",f4_a:"Paga una instalación única, el equipo (que es suyo) y una tarifa mensual fija de soporte para toda la oficina. Sin suscripciones por persona ni medidores de uso. Si le ahorra dinero depende del tamaño de su equipo y de cuánto la use — revisamos los números con usted con honestidad.",
f5_q:"¿Qué pasa si se cae el internet?",f5_a:"La IA en su oficina sigue funcionando en su red local. Internet solo se necesita para soporte remoto y actualizaciones programadas.",
f6_q:"Ya tenemos una empresa de TI. ¿La reemplazamos?",f6_a:"No. Trabajamos junto a su proveedor de TI actual y seguimos sus estándares. Ellos siguen con lo suyo; nosotros nos encargamos de la IA.",
f7_q:"¿Qué tan confiable es el piloto alojado?",f7_a:"Está pensado para pilotos y cargas ligeras, y corre en equipos locales dedicados con monitoreo y plan de mantenimiento. Hoy no tiene las garantías de un gran centro de datos. Si la IA se vuelve crítica para su operación diaria, recomendamos la opción en oficina.",
it_h:"Para su equipo de TI",it_p:"Detalles técnicos para proveedores de TI y revisores de seguridad.",
it1_q:"Opciones de hardware",it_t1a:"Inicial",it_t1b:"Sistema compacto clase NVIDIA DGX Spark (GB10, 128 GB de memoria unificada) o unidad GB10 equivalente de otro fabricante.",it_t2a:"Práctica",it_t2b:"Estación de trabajo con NVIDIA RTX PRO 6000 (96 GB), o varias unidades GB10 enlazadas.",it_t3a:"Empresarial",it_t3b:"Sistema clase NVIDIA DGX Station (GB300) para muchos usuarios; requiere circuito dedicado y revisión de enfriamiento (aprox. 1–1.2 kW).",
it2_q:"Modelos y software",it2_a:"Modelos de lenguaje de pesos abiertos (por ejemplo, familias Qwen y GLM) servidos con motores de inferencia de código abierto en el equipo; embeddings locales para búsqueda en documentos de la firma; interfaz de chat en el navegador con cuentas locales/SSO. No se envían datos a los proveedores de modelos. El modelo se elige según el hardware y la carga, y se prueba antes de entrar en producción.",
it3_q:"Red y seguridad",it3_l1:"VLAN/segmento dedicado para el sistema de IA; reglas de firewall que solo permiten clientes internos.",it3_l2:"Ningún puerto entrante expuesto a internet; soporte remoto por VPN/overlay autenticado que usted puede desactivar.",it3_l3:"Cifrado de disco, acceso por roles, registro de uso y monitoreo/alertas.",it3_l4:"Ventanas de cambio y actualizaciones coordinadas con su proveedor de TI; documentación entregada al finalizar.",
c_h:"Reserve su evaluación gratuita de IA",c_p:"30 minutos, en persona en el área de Oviedo o en línea. Sin costo ni compromiso.",
c_l1:"Dónde la IA podría ahorrarle tiempo a su equipo este mes",c_l2:"Qué debe (y qué no debe) ir en herramientas de IA públicas",c_l3:"Si la IA en oficina o alojada se ajusta a su tamaño y presupuesto",c_l4:"Un breve resumen escrito para usted",
c_mail:"¿Prefiere correo?",c_name:"Nombre",c_biz:"Negocio",c_email:"Correo electrónico",c_phone:"Teléfono (opcional)",c_ind:"Tipo de negocio",
o1:"Bufete de abogados",o2:"Contador / impuestos",o3:"Médico / dental",o4:"Servicios financieros",o5:"Títulos / bienes raíces",o6:"Defensa / tecnología",o7:"Otro",
c_msg:"¿En qué le gustaría que le ayude la IA?",c_send:"Solicitar mi evaluación gratuita",c_note:"Esto abre su aplicación de correo con el mensaje listo para enviar. Este sitio no guarda nada.",
ft_1:"(nombre provisional) · un servicio de NetworkingDev LLC · Oviedo, Florida",
ft_2:"Información general — no es asesoría legal, fiscal ni de cumplimiento. Cada negocio es responsable de sus propias obligaciones profesionales. Los nombres de productos pertenecen a sus dueños."
};

var CAP = {
 en:{priv:'<span class="good">Private AI:</span> the document goes to the AI box <em>inside</em> your office and comes back as a summary. The internet line is cut — nothing leaves the building.',
     pub:'<span class="bad">Public AI website:</span> the document travels over the internet to someone else\'s servers. Where it\'s stored, who sees it, and how long it\'s kept is out of your hands.',
     svg:{office:"YOUR OFFICE",team:"Your team",box:"Private AI box",cloud:"Internet / public AI",s1:"Nothing leaves",s2:"the building",pub1:"Public AI website",pub2:"(someone else's servers)",w1:"Client data left",w2:"your office"},
     thinking:"Working… (inside your office, nothing sent out)",done:"Done — produced inside your office",idle:"Ready — running inside your office"},
 es:{priv:'<span class="good">IA privada:</span> el documento va a la caja de IA <em>dentro</em> de su oficina y regresa como un resumen. La línea a internet está cortada — nada sale del edificio.',
     pub:'<span class="bad">Sitio de IA público:</span> el documento viaja por internet a los servidores de otra empresa. Dónde se guarda, quién lo ve y por cuánto tiempo ya no depende de usted.',
     svg:{office:"SU OFICINA",team:"Su equipo",box:"Caja de IA privada",cloud:"Internet / IA pública",s1:"Nada sale",s2:"del edificio",pub1:"Sitio de IA público",pub2:"(servidores de otros)",w1:"Datos del cliente",w2:"salieron"},
     thinking:"Trabajando… (dentro de su oficina, nada se envía)",done:"Listo — producido dentro de su oficina",idle:"Lista — funcionando dentro de su oficina"}
};

var OUT = {
 en:{
  sum:"SUMMARY — Commercial Lease (fictional sample)\n\n• Parties: Lakeside Holdings LLC (landlord) and Bright Path Services Inc. (tenant).\n• Term: 5 years, Mar 1, 2027 – Feb 28, 2032.\n• Rent: $4,200/month, +3% per year; 5% late fee after the 5th.\n• Deposit: $8,400, returned within 30 days of move-out.\n• Options: one 5-year renewal (notice 180 days before end); early exit after year 3 with 6 months' notice + 3 months' rent.\n• Responsibilities: landlord — roof, structure, HVAC; tenant — interior repairs and $1M liability insurance.\n\nPoints to review: the early-exit fee and the 180-day renewal notice are easy to miss.",
  dates:"KEY DATES\n\n• Mar 1, 2027 — lease starts; first rent due.\n• Every 1st — rent due (late fee after the 5th).\n• Mar 1, 2028 / 2029 / 2030 / 2031 — 3% rent increases.\n• Mar 1, 2030 — earliest early-termination date (after year 3), with 6 months' notice → notice by ~Sep 1, 2029.\n• Sep 1, 2031 — last day to give renewal notice (180 days before end).\n• Feb 28, 2032 — lease ends.\n\nSuggested: add the notice deadlines to the firm calendar.",
  email:"DRAFT EMAIL\n\nSubject: Summary of your new lease\n\nHi Maria,\n\nThank you for sending the lease for Suite 210. Here are the main points:\n\n– 5-year term starting March 1, 2027, at $4,200/month with 3% yearly increases.\n– You can leave after year 3 with 6 months' notice and a fee equal to 3 months' rent.\n– If you want to renew, notice is due by September 1, 2031.\n– You'll need $1M in liability insurance naming the landlord.\n\nI'd suggest we discuss the early-exit terms before you sign. Are you free this week?\n\nBest regards,\n[Your name]",
  es:"EXPLICACIÓN EN ESPAÑOL\n\nEste es un contrato de arrendamiento comercial por 5 años (marzo 2027 – febrero 2032).\n\n• Renta: $4,200 al mes, sube 3% cada año. Recargo de 5% si paga después del día 5.\n• Depósito: $8,400, se devuelve en 30 días.\n• Puede renovar por 5 años más si avisa 180 días antes.\n• Puede salir después del tercer año con 6 meses de aviso y pagando 3 meses de renta.\n• Usted debe tener un seguro de responsabilidad de $1 millón.\n\nIdeal para clientes que prefieren español."
 },
 es:{
  sum:"RESUMEN — Arrendamiento comercial (ejemplo ficticio)\n\n• Partes: Lakeside Holdings LLC (arrendador) y Bright Path Services Inc. (arrendatario).\n• Plazo: 5 años, 1 mar 2027 – 28 feb 2032.\n• Renta: $4,200/mes, +3% anual; recargo de 5% después del día 5.\n• Depósito: $8,400, devuelto dentro de 30 días.\n• Opciones: una renovación de 5 años (aviso 180 días antes); salida anticipada después del año 3 con 6 meses de aviso + 3 meses de renta.\n• Responsabilidades: arrendador — techo, estructura, aire; arrendatario — reparaciones interiores y seguro de $1M.\n\nPara revisar: el cargo por salida anticipada y el aviso de 180 días son fáciles de pasar por alto.",
  dates:"FECHAS CLAVE\n\n• 1 mar 2027 — inicia el contrato; primera renta.\n• Cada día 1 — renta (recargo después del día 5).\n• 1 mar 2028 / 2029 / 2030 / 2031 — aumentos de 3%.\n• 1 mar 2030 — primera fecha posible de salida anticipada, con 6 meses de aviso → aviso antes de ~1 sep 2029.\n• 1 sep 2031 — último día para avisar renovación (180 días antes).\n• 28 feb 2032 — termina el contrato.\n\nSugerencia: agregar los plazos de aviso al calendario de la firma.",
  email:"BORRADOR DE CORREO\n\nAsunto: Resumen de su nuevo contrato\n\nHola María:\n\nGracias por enviarnos el contrato del Suite 210. Estos son los puntos principales:\n\n– Plazo de 5 años desde el 1 de marzo de 2027, a $4,200/mes con aumentos de 3% anual.\n– Puede salir después del tercer año con 6 meses de aviso y un cargo de 3 meses de renta.\n– Si desea renovar, debe avisar antes del 1 de septiembre de 2031.\n– Necesitará un seguro de responsabilidad de $1M a nombre del arrendador.\n\nLe sugiero revisar los términos de salida antes de firmar. ¿Tiene tiempo esta semana?\n\nSaludos,\n[Su nombre]",
  es:"EXPLANATION IN ENGLISH\n\nThis is a 5-year commercial lease (March 2027 – February 2032).\n\n• Rent: $4,200/month, rising 3% each year. 5% late fee after the 5th.\n• Deposit: $8,400, returned within 30 days.\n• One 5-year renewal with 180 days' notice.\n• Early exit after year 3 with 6 months' notice and 3 months' rent.\n• Tenant needs $1 million liability insurance.\n\nUseful for staff or clients who prefer English."
 }
};

var lang = "en", EN = {};
var nodes = document.querySelectorAll("[data-i18n]");
nodes.forEach(function(n){ EN[n.getAttribute("data-i18n")] = n.innerHTML; });

function applyLang(l){
  lang = l;
  document.documentElement.lang = l;
  nodes.forEach(function(n){
    var k = n.getAttribute("data-i18n");
    var v = (l === "es" && ES[k] != null) ? ES[k] : EN[k];
    if (v != null) n.innerHTML = v;
  });
  var s = CAP[l].svg;
  Object.keys(s).forEach(function(k){ document.querySelectorAll(".svg-"+k).forEach(function(t){ t.textContent = s[k]; }); });
  var b = document.getElementById("langBtn");
  b.textContent = l === "es" ? "EN" : "ES";
  b.setAttribute("aria-label", l === "es" ? "Switch to English" : "Cambiar a español");
  setCaption();
  resetDemo();
  try{ localStorage.setItem("lang", l); }catch(e){}
}

/* scenes */
var current = "priv", userPicked = false;
var sp = document.getElementById("scene-private"), sq = document.getElementById("scene-public");
var tp = document.getElementById("tabPriv"), tq = document.getElementById("tabPub");
function restart(svg){ svg.querySelectorAll("g,rect,path").forEach(function(el){ var a = el.style.animation; el.style.animation = "none"; void el.getBoundingClientRect(); el.style.animation = a; }); }
function setCaption(){ document.getElementById("caption").innerHTML = CAP[lang][current]; }
function show(which){
  current = which;
  sp.classList.toggle("hidden", which !== "priv");
  sq.classList.toggle("hidden", which !== "pub");
  tp.setAttribute("aria-selected", which === "priv");
  tq.setAttribute("aria-selected", which === "pub");
  restart(which === "priv" ? sp : sq);
  setCaption();
}
tp.addEventListener("click", function(){ userPicked = true; show("priv"); });
tq.addEventListener("click", function(){ userPicked = true; show("pub"); });
var cycles = 0;
setInterval(function(){
  if (userPicked || document.hidden) return;
  cycles++;
  // two private loops, then one public loop
  if (current === "priv" && cycles % 3 === 2) show("pub");
  else if (current === "pub") show("priv");
}, 9000);

/* demo */
var outText = document.getElementById("outText"), outStatus = document.getElementById("outStatus");
var timer = null, busy = false;
var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function resetDemo(){ clearInterval(timer); busy = false; document.querySelectorAll(".chip").forEach(function(c){ c.classList.remove("on"); }); }
document.querySelectorAll(".chip").forEach(function(c){
  c.addEventListener("click", function(){
    resetDemo();
    c.classList.add("on");
    var text = OUT[lang][c.getAttribute("data-task")];
    outStatus.textContent = CAP[lang].thinking;
    outText.innerHTML = '<span class="cursor"></span>';
    busy = true;
    setTimeout(function(){
      if (!busy) return;
      if (reduce){ outText.textContent = text; outStatus.textContent = CAP[lang].done; return; }
      var i = 0;
      timer = setInterval(function(){
        i += 3;
        outText.textContent = text.slice(0, i);
        outText.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');
        if (i >= text.length){ clearInterval(timer); outText.textContent = text; outStatus.textContent = CAP[lang].done; busy = false; }
      }, 18);
    }, 1100);
  });
});

/* contact form -> mailto (no third-party service) */
document.getElementById("cform").addEventListener("submit", function(e){
  e.preventDefault();
  var f = e.target;
  if (!f.name.value.trim() || !f.email.value.trim()){
    (f.name.value.trim() ? f.email : f.name).focus();
    return;
  }
  var body = [
    "Name: " + f.name.value, "Business: " + f.business.value, "Email: " + f.email.value,
    "Phone: " + f.phone.value, "Type of business: " + f.industry.value, "", f.message.value
  ].join("\n");
  var subj = (lang === "es" ? "Evaluación gratuita de IA – " : "Free AI readiness assessment – ") + (f.business.value || f.name.value);
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
});

var saved = null; try{ saved = localStorage.getItem("lang"); }catch(e){}
var startEs = saved === "es" || (!saved && /^es/i.test(navigator.language || "")) || /[?&]lang=es/.test(location.search);
document.getElementById("langBtn").addEventListener("click", function(){ applyLang(lang === "es" ? "en" : "es"); });
applyLang(startEs ? "es" : "en");
show("priv");
})();
