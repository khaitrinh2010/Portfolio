import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="max-w-xl mx-auto space-y-6">
                    {[
                        {
                            icon: <Mail className="h-5 w-5 text-primary" />,
                            title: "Email",
                            href: "mailto:trinhlamkhai@gmail.com",
                            value: "trinhlamkhai@gmail.com",
                        },
                        {
                            icon: <Phone className="h-5 w-5 text-primary" />,
                            title: "Phone",
                            href: "tel:+61403791359",
                            value: "(+61) 403791359",
                        },
                        {
                            icon: <MapPin className="h-5 w-5 text-primary" />,
                            title: "Location",
                            href: "#",
                            value: "Sydney, NSW, Australia",
                        },
                        {
                            icon: <FaLinkedin className="h-5 w-5 text-primary" />,
                            title: "LinkedIn",
                            href: "https://www.linkedin.com/in/khai-trinh-5078912bb",
                            value: "linkedin.com/in/khai",
                        },
                    ].map(({ icon, title, href, value }, index) => (
                        <a
                            key={index}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 hover:bg-primary/5 rounded-md p-3 transition-all"
                        >
                            <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                                <p className="text-muted-foreground text-sm">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
