import Container from "components/Container";
import Image from "next/image";

export default function Om() {
  return (
    <div>
      <div className="relative h-[350px] lg:h-[600px]">
        <Image
          src="/img/about-banner.jpg"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <Container className="prose">
        <h2>Om Johan Berggren</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          debitis quis commodi ipsa, sequi beatae magni ratione quos explicabo
          quas tenetur, ut eum quo iusto eaque laborum? Explicabo, cupiditate
          ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          voluptates delectus voluptatum veritatis qui alias nam quos quisquam
          impedit doloribus repudiandae autem cupiditate dicta aspernatur.
          Placeat atque impedit adipisci reiciendis? Ut quae id molestias ipsum
          facilis iusto ratione ex nihil voluptatem sint culpa, sit dicta. Eius
          beatae ratione perferendis rem blanditiis, voluptatem aperiam in eos
          saepe nostrum, nesciunt accusantium molestiae!
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-[500px]">
            <Image
              src="/img/about-image-1.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/img/about-image-2.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          debitis quis commodi ipsa, sequi beatae magni ratione quos explicabo
          quas tenetur, ut eum quo iusto eaque laborum? Explicabo, cupiditate
          ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          voluptates delectus voluptatum veritatis qui alias nam quos quisquam
          impedit doloribus repudiandae autem cupiditate dicta aspernatur.
          Placeat atque impedit adipisci reiciendis? Ut quae id molestias ipsum
          facilis iusto ratione ex nihil voluptatem sint culpa, sit dicta. Eius
          beatae ratione perferendis rem blanditiis, voluptatem aperiam in eos
          saepe nostrum, nesciunt accusantium molestiae!
        </p>
      </Container>
    </div>
  );
}
