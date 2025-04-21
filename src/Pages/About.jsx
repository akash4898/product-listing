const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 bg-gray-50">
      {/* Background Section */}
      <div className="relative h-72 w-full bg-cover bg-center rounded-xl shadow-lg" style={{ backgroundImage: "url('public/images/about.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        {/* <h2 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">About Us</h2> */}
      </div>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="bg-white shadow-2xl rounded-2xl p-10">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed">
            We are a team of passionate professionals dedicated to providing exceptional services.
            Our goal is to empower businesses and individuals with innovative solutions that drive success.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Founded in 2010, we have grown into a leading company with a commitment to excellence,
            customer satisfaction, and continuous improvement.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img src="public/images/team.jpg" alt="Team" className="rounded-2xl shadow-md" />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 shadow-lg rounded-2xl p-8">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver innovative and customer-centric solutions that drive growth and success for our clients.
          </p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-2xl p-8">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a globally recognized leader in our industry, setting new standards of excellence and innovation.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">Meet Our Team</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div  className="bg-white shadow-lg rounded-2xl p-6">
              <img src={`public/images/team1.jpg`} alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Kailash Chand Gupta</h4>
              <p className="text-gray-600">CEO & Founder</p>
              {/* <small><p className="text-gray-600">Kailash Chand Harish Kumar Shoe's Merchant</p></small> */}
              
            </div>
            <div  className="bg-white shadow-lg rounded-2xl p-6">
              <img src={`public/images/team2.jpg`} alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Hitesh Gupta</h4>
              <p className="text-gray-600">CEO</p>
              {/* <small><p className="text-gray-600">Paayon's Shoes</p></small> */}
            </div>
            <div  className="bg-white shadow-lg rounded-2xl p-6">
              <img src={`public/images/akash.jpg`} alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Akash Gupta</h4>
              <p className="text-gray-600">Founder</p>
              {/* <small><p className="text-gray-600">Paayon's Shoes</p></small> */}

            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
