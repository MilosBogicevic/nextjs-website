import Image from "next/image";
import TeamsData from "@/app/data/teams.json";
import SectionHeading from "./SectionHeading";

export default function Teams() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-20">
        <SectionHeading title="Our teams" />
        <div className="flex justify-center flex-wrap gap-20 px-4">
          {TeamsData.map((team, index) => (
            <div key={index} className="shadow-xl">
              <div className="relative">
                <Image
                  src={team.image}
                  alt={team.alt}
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-primary opacity-80 border-4 border-secondary"></div>
                <h3 className="text-5xl font-bold text-secondary absolute bottom-4 left-4">
                  {team.name}
                </h3>
              </div>
              <table className="border-collapse border border-gray-200 w-full text-left">
                <tbody>
                  <tr>
                    <th className="border border-gray-200 p-4">
                      Project Managers
                    </th>
                    <td className="border border-gray-200 p-4 max-w-5 text-center">
                      {team.about.projectManagers}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-200 p-4">
                      Frontend Developers
                    </th>
                    <td className="border border-gray-200 p-4 max-w-5 text-center">
                      {team.about.frontEndDevs}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-200 p-4">
                      Backend Developers
                    </th>
                    <td className="border border-gray-200 p-4 max-w-5 text-center">
                      {team.about.backEndDevs}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-200 p-4">
                      QA Developers
                    </th>
                    <td className="border border-gray-200 p-4 max-w-5 text-center">
                      {team.about.qaDevs}
                    </td>
                  </tr>
                  <tr>
                    <th className="border border-gray-200 p-4">
                      Projects Availability
                    </th>
                    <td
                      className={`border border-gray-200 p-4 max-w-5 text-center ${
                        team.about.projectsAvailiability === 0
                          ? "bg-red-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {team.about.projectsAvailiability}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
