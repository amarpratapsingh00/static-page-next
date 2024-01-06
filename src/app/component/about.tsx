import Image from "next/image";
import desk from "../../../public/assets/d.png";
export default function About() {
  return (
    <>
      <section className="mt-2 bg-white-800 text-black">
        <h1 className="font-bold underline text-4xl">DESKTOP APPS MADE EASY</h1>
        <div className="mt-4">
          <Image src={desk} alt="logo" width={1600} height={400} />
        </div>
        <div className="mt-4">
          <ul className="flex justify-center space-x-16 m-4">
            <li className=" max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className="mt-4 ml-20">TOP CODE QUALITY</h2>
              <p className="m-4">
                We abide by the Industry-standard guidelines for our seamless
                software in electron development process.
              </p>
            </li>
            <li className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className="mt-4 ml-12">FRIENDLY AND RESPONSIVE</h2>
              <p className="m-4">
                We offer a friendly, and cordial environment for customers to
                interact with our resources (team)
              </p>
            </li>
            <li className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className="mt-4 ml-20">ROCKSTAR TEAM</h2>
              <p className="m-4">
                Our experienced team is adept at providing an enriching
                experience to our valuable customers.
              </p>
            </li>
            <li className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className=" flex flex-col justify-items-center m-4 ml-12 whitespace-nowrap">
                NON-DISCLOSURE AGREEMENT
              </h2>
              <p className="m-4">
                Privacy and confidentiality of our clients are regarded by
                signing the NDA.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex bg-gray-600 p-4 h-16">
        <h1 className="text-black text-xl ml-2 mr-2">ABOUT CLOUWOOD STUDIO</h1>
      </section>

      <section className="flex bg-white-800 text-black">
        <div>
        <div>
          <h2>DESKTOP APP MADE EASY</h2>
          <h3>HOW WE WORK</h3>
          <p>
            We help our customers to discover a new trail of success by
            simplifying the development process with proven methodologies.
            Clouwood Studio empowers businesses around the globe to harness the
            power of ElectronJS, for a cross-platform development.
          </p>
          <h3>WHO WE ARE</h3>
          <p>
            We are a team of technology enthusiasts and always on the lookout
            for new tech to improve our work. One of our goals is the continual
            improvement of ourselves and doing what we can to master more
            skills. Our professionals inhibit great industry knowledge & years
            of expertise which ensure that your business reaches an unrivaled
            position & set a new level of success.
          </p>
        </div>
        <div>
          <div className="mb-1 text-base font-medium dark:text-white">
            Quality Assurance
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-4/5"></div>
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            Design
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2.5 mb-4 dark:bg-blue-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-gray-300 w-4/5"></div>
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            ElectronJS
          </div>
          <div className="w-full bg-red-200 rounded-full h-2.5 mb-4 dark:bg-red-700">
            <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-300 w-4/5"></div>
          </div>
          <div className="mb-1 text-base font-medium dark:text-white">
            Innovation
          </div>
          <div className="w-full bg-green-200 rounded-full h-2.5 mb-4 dark:bg-green-700">
            <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-300 w-4/5"></div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
