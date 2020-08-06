import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1288927699218714627/ja2vZyfh_400x400.jpg" alt="Juan Felipe Krassmann" />
        <div>
          <strong>Juan Felipe Krassmann</strong>
          <span>Química</span>

        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        Nullam gravida eros in tristique volutpat. Aliquam porta erat at risus lacinia sagittis. Nunc lacinia metus tortor, ac lacinia mi molestie eu. Fusce velit magna, vestibulum et mollis quis, dignissim ut diam. Suspendisse tincidunt ligula mauris, id condimentum tortor pharetra nec.
      </p>

      <footer>
        <p>Preço/hora
          <strong>R$ 120,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"></img>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

