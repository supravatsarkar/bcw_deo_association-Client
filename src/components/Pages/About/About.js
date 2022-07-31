import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import aboutImage from "../../../assets/about-img.jpg";

const About = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h1>About us</h1>
      <img
        className="w-50 shadow-lg rounded-2 p-2 m-2"
        src={aboutImage}
        alt="about image"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        inventore cumque iusto odit, nisi sequi libero? Ducimus quibusdam
        voluptatum aliquid animi facere officiis consectetur, dicta repellat
        doloremque officia hic eos deleniti sequi, autem rerum quas recusandae
        fugit unde ut eligendi itaque dolore, labore laborum? Molestias commodi
        rem amet, quis aperiam fugit veniam ullam laudantium voluptatibus
        aliquid a, optio odio adipisci magnam tempore porro ea nihil sunt culpa
        atque et ipsum aspernatur? Eum nihil sed ducimus. Natus odio eveniet hic
        tempore ea, itaque laboriosam ducimus repellat illum fugiat amet dicta
        rem, iure architecto quibusdam ratione nulla nesciunt deleniti
        reiciendis aliquid veritatis sunt! Sint, officia? Atque molestiae
        dolorem ipsum quas a deleniti omnis maiores voluptatum totam aperiam,
        sint in laudantium! Quo esse dolores totam consectetur ducimus
        necessitatibus possimus perspiciatis fuga ex. Optio aut, eveniet earum,
        voluptatibus recusandae odit perspiciatis quibusdam quod dolores
        voluptatum ipsum nulla reprehenderit quaerat repudiandae possimus
        adipisci facilis quos! Quidem similique neque voluptates assumenda totam
        quis rerum cupiditate laudantium, non illo sit dolorum, repellat,
        deserunt vel placeat odit quasi minus dolorem! Et vitae nam minus
        impedit! Fugit ut et perferendis dolorem. Illum consequuntur veniam
        dolor, labore reiciendis ea numquam quas culpa, veritatis voluptas eius
        est quasi, aliquid distinctio dolorem?
      </p>
    </div>
  );
};

export default About;
