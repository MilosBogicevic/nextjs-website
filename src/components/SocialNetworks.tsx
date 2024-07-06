import Image from "next/image";
import Link from "next/link";
import SocialNetworksData from "@/app/data/social-networks.json";
export default function SocialNetworks() {
  return (
    <>
      <div className="flex space-x-4">
        {SocialNetworksData.map((el, index) =>
          el.url ? (
            <Link key={index} href={el.url}>
              <Image
                src={el.icon}
                alt={`ECSMB ${el.title} page.`}
                width={40}
                height={40}
                className="transition-transform hover:scale-105"
              />
            </Link>
          ) : (
            <Image
              key={index}
              src={el.icon}
              alt={`ECSMB ${el.title} page.`}
              width={40}
              height={40}
              className="filter grayscale brightness-200"
            />
          )
        )}
      </div>
    </>
  );
}
