import { Card } from "@/components/common";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-fit bg-black">
        <div className="w-52">
          <h2 className="text-white text-6xl">ABOUT ME </h2>
          <p  className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat odio eum veritatis ea quisquam sed ducimus nisi a dolorum. Voluptatum eveniet possimus corporis aliquam molestiae, saepe rerum error quibusdam.</p>
        </div>
      </section>
      <section className="h-fit bg-black">
        <h2>My experience</h2>
        <Card title="Who am I" content="askldasdañ"/>
      </section>
      
    </div>
  );
}
