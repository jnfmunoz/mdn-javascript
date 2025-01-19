const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Moving and removing elements
sect.appendChild(linkPara); // mover un nodo al fondo de la sección
sect.removeChild(linkPara); // remover un nodo
// linkPara.parentNode.removeChild(linkPara); // método para navegadores más antiguos

// Manipulating styles
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// para.setAttribute("class", "highlight");
