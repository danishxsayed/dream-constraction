import { Reveal } from "@/components/Reveal";
import { team } from "@/lib/site-data";

export function TeamSection() {
  return (
    <section className="shell py-24 md:py-36">
      <Reveal>
        <p className="eyebrow text-[10px] text-bronze">Our Team</p>
      </Reveal>
      <Reveal as="h2" mask className="mt-8 display-lg">
        The people behind<br />every project.
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 80}>
            <div className="group">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 border-t border-hairline pt-4">
                <p className="font-display text-xl leading-snug">{member.name}</p>
                <p className="mt-1 eyebrow text-[10px] text-bronze">{member.designation}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
