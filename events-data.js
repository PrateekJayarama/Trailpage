const eventsDatabase = {
  corporate: {
    tag: "CORPORATE EVENTS",
    title: "Corporate Events & Summits",
    description: "From high-stakes summits to celebratory annual galas, we deliver precise logistics, state-of-the-art AV, and flawless brand execution.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    plans: [
      { name: "Executive Conference", price: "Custom Quote", features: ["Keynote Stage Setup", "Multi-Room AV Coordination", "Delegate Registration & App Integration", "Live Streaming"] },
      { name: "Annual Gala & Awards", price: "Custom Quote", features: ["Banquet Seating & Spatial Layout", "Ambient Intelligent Lighting", "Red Carpet & Media Wall", "Catering Coordination"] },
      { name: "Product Launch Showcase", price: "Custom Quote", features: ["3D Holographic Stage Mapping", "Press & Media Management", "Experiential Product Booths", "VIP Lounge Setup"] }
    ],
    pastEvents: [
      { name: "CyberPulse Summit 2025", location: "Convention Center", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
      { name: "Nexus Global Leadership Gala", location: "Grand Hyatt Ballroom", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" }
    ],
    reviews: [
      { quote: "Friendz eventz executed our 3-day tech summit flawlessly. The AV coordination and VIP lounge setup were praised by all delegates.", author: "Sarah Jenkins", role: "VP Marketing, TechCorp" },
      { quote: "The product launch stage was unbelievable! The holographic mapping truly elevated our brand prestige.", author: "David Vance", role: "CEO, Aura Innovations" },
      { quote: "Professional, punctual, and calm under pressure. Friendz eventz is our go-to partner for corporate galas.", author: "Anita Roy", role: "HR Lead, Global Systems" }
    ]
  },
  marriage: {
    tag: "MARRIAGES & WEDDINGS",
    title: "Royal Weddings & Receptions",
    description: "We turn your dream wedding into a fairytale celebration with luxury decor, floral stage design, and effortless hospitality.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    plans: [
      { name: "Destination Wedding Setup", price: "Custom Quote", features: ["Full Resort Conceptual Decor", "Guest Arrival Logistics & Hospitality", "Theme Mandap & Lighting", "Vendor Management"] },
      { name: "Sangeet & Musical Night", price: "Custom Quote", features: ["Concert-Grade Stage Setup", "Choreography Lighting & Pyrotechnics", "Custom Bar & Dining Setup", "Artist & DJ Management"] },
      { name: "Grand Reception Gala", price: "Custom Quote", features: ["Royal Floral Architecture", "Seating & Table Scaping", "Live Orchestra / Band", "Photo & Video Capture Support"] }
    ],
    pastEvents: [
      { name: "The Royal Mirage Destination Wedding", location: "Udaipur Palace", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" },
      { name: "Ananya & Rohan’s Sunset Reception", location: "Seaside Resort", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80" }
    ],
    reviews: [
      { quote: "Our wedding felt like a dream. Friendz eventz handled everything so gracefully that we enjoyed every single minute with family.", author: "Priya & Vikram", role: "Newlyweds" },
      { quote: "The decor for the Sangeet night blew everyone away. The lighting and stage setup were top-notch!", author: "Rajesh Sharma", role: "Father of the Bride" },
      { quote: "Flawless guest hospitality and gorgeous floral mandap design. Highly recommended!", author: "Meera Kapoor", role: "Wedding Host" }
    ]
  },
  birthday: {
    tag: "BIRTHDAYS & PRIVATE PARTIES",
    title: "Milestone Birthdays & Theme Parties",
    description: "Celebrate milestones in style with bespoke theme concepts, immersive neon lighting, custom sound setups, and VIP hospitality.",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    plans: [
      { name: "Glow & Neon Milestone Bash", price: "Custom Quote", features: ["UV Interactive Decor", "Custom Neon Photo Booths", "DJ & Sound Engineering", "Curated Cocktail Menu"] },
      { name: "Private Luxury Celebration", price: "Custom Quote", features: ["Rooftop / Estate Transformation", "Fine Dining & Live Stations", "Acoustic / Jazz Band Setup", "Personalized Guest Favors"] },
      { name: "Kids Fantasy World", price: "Custom Quote", features: ["3D Theme Backdrop & Props", "Interactive Games & Entertainers", "Custom Cake & Dessert Station", "Safety Escort Team"] }
    ],
    pastEvents: [
      { name: "Neon Horizon 30th Birthday", location: "Private Rooftop Estate", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
      { name: "Retro Disco 50th Gala", location: "Grand Club Lounge", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" }
    ],
    reviews: [
      { quote: "My 30th birthday neon party was legendary! People are still talking about the DJ booth and neon decor.", author: "Rohan Verma", role: "Birthday Host" },
      { quote: "Friendz eventz brought our daughter’s fairy tale theme to life. Super organized and effortless!", author: "Sonia Kapoor", role: "Parent" },
      { quote: "Great cocktail bar setup and awesome sound system! Everything was seamless.", author: "Arjun Mehta", role: "Party Host" }
    ]
  },
  fest: {
    tag: "COLLEGE FESTS",
    title: "College Fests & Campus Events",
    description: "High-capacity campus festivals, celebrity concert nights, and cultural showcases backed by impenetrable crowd control and concert-grade sound.",
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    plans: [
      { name: "Annual Cultural Fest", price: "Custom Quote", features: ["Multi-Stage Simultaneous Layout", "Sound & Lighting Trussing", "Artist Hospitality & Green Rooms", "Campus Crowd Logistics"] },
      { name: "Tech Symposium & Hackathon", price: "Custom Quote", features: ["High-Speed Wifi Infrastructure", "Interactive Demo Stalls", "Keynote Audio Setup", "Prize Ceremony Production"] },
      { name: "Pro-Nite Concert Night", price: "Custom Quote", features: ["Concert Arena Trussing", "Pyrotechnics & CO2 Jets", "Artist Security Escort", "Barricade & Access Control"] }
    ],
    pastEvents: [
      { name: "Pulse Campus Fest 2026", location: "University Stadium", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" },
      { name: "Apex Tech Expo & Hackathon", location: "Campus Auditorium", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" }
    ],
    reviews: [
      { quote: "Friendz eventz managed 15,000 students for our Pro-Nite smoothly. Security and stage energy were 10/10!", author: "Prof. K. K. Nair", role: "Dean of Student Affairs" },
      { quote: "The sound system and laser shows for our campus fest were unreal. Best fest production we ever had!", author: "Aakash Gupta", role: "Student Council President" },
      { quote: "Incredible team! They managed artist delays and crowd entry with zero panic.", author: "Divya Nambiar", role: "Fest Coordinator" }
    ]
  },
  outdoor: {
    tag: "OUTDOOR EVENTS",
    title: "Outdoor Concerts & Festivals",
    description: "Mega outdoor music festivals, open-air flea markets, and sports arenas engineered with weatherproof trussing, spatial mapping, and safety compliance.",
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    plans: [
      { name: "Open-Air Music Festival", price: "Custom Quote", features: ["Heavy-Duty Ground Support Trussing", "Line-Array Sound Systems", "Pyrotechnics & LED Stage Walls", "Entry Ticketing Gates"] },
      { name: "Food & Flea Festival", price: "Custom Quote", features: ["Vendor Stall Architectural Setup", "Power Backup Generators", "Ambient String & Accent Lighting", "Waste Management Logistics"] },
      { name: "Outdoor Sports Arena Meet", price: "Custom Quote", features: ["Stadium Audio Engineering", "Podium & Opening Ceremony", "VIP Seating Canopy", "Medical & Safety Booths"] }
    ],
    pastEvents: [
      { name: "Starlight Open-Air Concert", location: "City Arena Grounds", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" },
      { name: "Urban Street Food & Music Fest", location: "Waterfront Park", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" }
    ],
    reviews: [
      { quote: "Building an open-air concert in 48 hours seemed impossible, but Friendz eventz made it look easy.", author: "Marcus Vance", role: "Promoter, EDM Live" },
      { quote: "Rain didn't stop us! Their weather contingency and covered stall design saved our flea market fest.", author: "Tanya Sen", role: "Organizer, Food Carnival" },
      { quote: "Unbeatable stage setup and pyrotechnics. The atmosphere was electrifying!", author: "Karan Patel", role: "Event Lead" }
    ]
  }
};