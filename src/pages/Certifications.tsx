import { motion } from "framer-motion";

const certifications = [
  {
    title: "Junior Java Ready",
    issuer: "Junior Java Ready",
    link: "https://www.dropbox.com/scl/fi/6iis4atw8v60okwqnqvi4/Certyfikat-Junior-Java-Ready.pdf?rlkey=nd1stc3a6nurgi1zprqpplx5u&st=wif1n8qc&dl=0",
    image: "/images/certifications/jjr.png",
  },
  {
    title: "Zajavka – Java Developer (22 Workshops)",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-40118310-bd46-47d1-9db1-b30e560c775c/",
    image: "/images/certifications/zajavka.jpg",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/Senegal/responsive-web-design",
    image: "/images/certifications/freeCodeCamp.png",
  },
  {
    title: "Agile Scrum Master Basics",
    issuer: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NDgzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODE3MTQ4Nl84NTA2ODY4MTc0NDI5MjQzNTk3NC5wbmciLCJ1c2VybmFtZSI6Ilx1MDE0MXVrYXN6IFBlbGlrYW4ifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8171486_85068681744292435974.png&_branch_match_id=1408832289406566817&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1vc3Kg7yqihKKw5Osq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwCnyShDPwAAAA%3D%3D",
    image: "/images/certifications/simplilearn.png",
  },
  {
    title: "Certificate of Participation – Design4All Hackathon",
    issuer: "Politechnika Łódzka",
    link: "https://www.dropbox.com/scl/fi/cy21c2lx2k25u0nze87zh/Certificate-of-Participation.pdf?rlkey=kplq09pidcgs2vmgbnlo5yk12&st=y4yqqhf8&dl=0",
    image: "/images/certifications/hackathon.png",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    link: "https://www.dropbox.com/scl/fi/ysht8no85g0zdih0hhktb/LukaszPelikan-Comuter-Network-certificate.pdf?rlkey=lkgl8u10yr4yc7y5mj6chxruy&st=h8foezgb&dl=0",
    image: "/images/certifications/cisco.png",
  },
  {
    title: "Santander AI for Everyone – 2025",
    issuer: "Santander",
    link: "https://www.dropbox.com/scl/fi/01f7yqlk9xmoklj6aczeg/certyfikat-1.pdf?rlkey=t8ibmd6aogtaa931l7e31jfje&st=jkkv162x&dl=0",
    image: "/images/certifications/santander.png",
  },
];

function Certifications() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          My Certifications
        </motion.h2>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 dark:bg-gray-700">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
