import Image from "next/image";
import TeamsData from "@/app/data/teams.json";

export default function Teams() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-20 px-4">
        {TeamsData.map((team, index) => (
          <div key={index} className="relative">
            <Image src={team.image} alt={team.alt} width={400} height={400} />
            <h3 className="text-5xl py-8 absolute inset-0">{team.name}</h3>
            <table className="mt-4 border-collapse border border-gray-200 w-full text-left">
              <tbody>
                <tr>
                  <th className="border border-gray-200 p-2">
                    Project Managers
                  </th>
                  <td className="border border-gray-200 p-2">
                    {team.about.projectManagers}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">
                    Frontend Developers
                  </th>
                  <td className="border border-gray-200 p-2">
                    {team.about.frontEndDevs}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">
                    Backend Developers
                  </th>
                  <td className="border border-gray-200 p-2">
                    {team.about.backEndDevs}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">QA Developers</th>
                  <td className="border border-gray-200 p-2">
                    {team.about.qaDevs}
                  </td>
                </tr>
                <tr>
                  <th className="border border-gray-200 p-2">
                    Projects Availability
                  </th>
                  <td
                    className={`border border-gray-200 p-2 ${
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
    </>
  );
}
