import React from 'react';

const Page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-7xl font-bold text-center text-green-700 py-8 bg-blue-200">
                Contact Us
            </h1>

            {/* Image centered */}
            <div className="text-center">
                <img 
                    src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-helping-customer-client-service-center-product-pack-network-communication-illustrations-2912016.png?f=webp" 
                    alt="Contact Us Illustration"
                    className="mx-auto block" // Center image with mx-auto and block
                     // Adjust height as needed
                />
            </div>

            {/* Main Content */}
            <p className="mt-8 text-lg">
                Hi there!<br />
                Thanks for visiting my portfolio! I’d love to hear from you.<br />
                Whether you have questions about my work, collaboration ideas, or just want to connect, feel free to reach out.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Email:</h2>
                <p>You can reach me at <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a>. I usually respond within 24 hours.</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Social Media:</h2>
                <p>Let’s connect on social media! You can find me here:</p>
                <ul className="list-disc ml-8">
                    <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/iqra-ikram-9660732b4/" className="text-blue-600">Iqra Ikram</a></li>
                    <li><b>Instagram:</b> <a href="" className="text-blue-600">Iqra Ikram</a></li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Message Me:</h2>
                <p>If you prefer, you can fill out the form below, and I’ll get back to you as soon as I can!</p>
            </div>

            <div className="mt-8">
                <p>Thank you for stopping by! I look forward to hearing from you.</p>
            </div>
        </div>
    );
};

export default Page;
