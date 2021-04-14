import React from 'react';
import ReturnButton from '../../components/Buttons/ReturnButton';
import styles from './aboutCompany.module.scss';

const AboutCompany = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Tutaj będzie informacja o Twojej firmie</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo libero voluptatem
                nulla nostrum atque unde harum accusamus. Nulla expedita, doloremque non esse
                consequuntur cumque odio, labore dignissimos veritatis dolore similique!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, cum? Aspernatur
                impedit ratione maxime, architecto itaque praesentium voluptatibus molestiae
                assumenda laborum, error amet possimus repudiandae quod voluptatem expedita ipsa
                quaerat. Veritatis dicta, itaque cumque libero similique voluptatem, veniam error ea
                maiores in explicabo perferendis? Mollitia vitae ratione iure ad natus asperiores
                officiis explicabo eum rerum modi autem obcaecati, et numquam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum excepturi id
                officiis adipisci eum magni iste, numquam, aspernatur odio cum, nulla iure quae
                illum fuga voluptatibus tempora! Reiciendis, porro.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti praesentium
                reiciendis velit quod voluptatem qui aut aliquam sequi eos maxime ut atque,
                repudiandae deserunt possimus hic dignissimos ex placeat. Et cumque voluptatum
                veniam eveniet consequuntur reiciendis corporis reprehenderit exercitationem sed
                labore, perferendis, obcaecati illo possimus mollitia alias a eos optio!
                Perspiciatis quibusdam unde labore beatae officiis quam natus animi! Eaque, in. Ex
                temporibus velit adipisci! Dolorem atque a, autem architecto inventore quas animi
                quos doloremque minima blanditiis veritatis et, dolor error sunt ipsum explicabo.
                Ad, voluptatem! Eaque, hic ratione!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis nulla
                consectetur pariatur magnam repudiandae minima quibusdam quidem laudantium omnis
                soluta aperiam a nisi facilis asperiores, consequuntur est dolore. Harum? Inventore
                atque quis sed nostrum aliquam debitis ad dolore quae voluptates rem. At vitae hic
                labore, odio quasi ea doloribus fuga accusamus numquam et qui magnam, eos quas
                deleniti ipsum. Quidem ab consectetur quia beatae reprehenderit soluta ipsam libero
                repellendus, illo impedit sit eligendi perferendis odit earum quae placeat sunt,
                reiciendis suscipit unde. Assumenda natus earum sequi officia quibusdam distinctio.
            </p>
            <p>Zapraszamy do wspólpracy!</p>
            <div className={styles.returnButton}>
                <ReturnButton />
            </div>
        </div>
    );
};
export default AboutCompany;
