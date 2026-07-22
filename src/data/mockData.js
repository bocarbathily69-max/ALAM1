export const mockData = {
  "Main Overview": {
    kpis: {
      totalCarbon: { value: "1,240", trend: "-4.2%", text: "-4.2% trend" },
      reductionProgress: { value: "65%", progress: 65, text: "OF NET ZERO GOAL" },
      scope1_2: { value: "420", badge: "Direct & Energy" },
      scope3: { value: "820", text: "Estimated baseline data" }
    },
    evolution: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      scope1: [80, 110, 70, 140, 100, 150],
      scope2: [180, 220, 170, 260, 210, 270]
    },
    sources: {
      labels: ["Electricity", "Logistics", "Buildings", "Other"],
      values: [480, 310, 250, 200]
    },
    proposals: [
      {
        title: "Install Solar Hybrid System",
        impact: "High Impact",
        desc: "Projected reduction of 120 tCO2e annually at Cape Town plant.",
        roi: "ROI 18 months",
        cost: "$85,000",
        reduction: "120 tCO2e/yr",
        steps: [
          "Site assessment & solar potential study",
          "Procurement of hybrid inverters & solar PV panels",
          "Installation & grid synchronization",
          "Performance monitoring dashboard setup"
        ]
      },
      {
        title: "Optimize Route Planning",
        impact: "Medium Impact",
        desc: "Reduces logistics footprint by adjusting transport frequency.",
        roi: "ROI 6 months",
        cost: "$12,000",
        reduction: "45 tCO2e/yr",
        steps: [
          "Integration of dynamic routing software",
          "Driver training on eco-driving practices",
          "Transition to off-peak delivery schedules"
        ]
      },
      {
        title: "LED Lighting Retrofit",
        impact: "Low Impact",
        desc: "Upgrade all office buildings to high efficiency smart LEDs.",
        roi: "ROI 12 months",
        cost: "$8,500",
        reduction: "18 tCO2e/yr",
        steps: [
          "Audit existing lighting fixtures",
          "Purchase of energy star certified LED tubes",
          "Installation by certified electricians"
        ]
      }
    ],
    sites: [
      { name: "Lagos HQ", country: "Nigeria", emissions: 450, status: "Audit Complete" },
      { name: "Nairobi Office", country: "Kenya", emissions: 310, status: "Audit Complete" },
      { name: "Cape Town Plant", country: "South Africa", emissions: 480, status: "In Progress" }
    ],
    inventory: [
      {
        id: "INV-001",
        name: "Backup Diesel Generators (500kVA)",
        category: "Stationary Combustion",
        scope: "Scope 1",
        location: "Lagos HQ",
        consumption: "45,000 L Diesel / yr",
        factor: "2.68 kg CO2e / L",
        emissions: 120.6,
        status: "Verified",
        auditedDate: "2026-05-14",
        notes: "Primary power fallback during local grid outages. Dual Cat C15 generators."
      },
      {
        id: "INV-002",
        name: "Logistics Delivery Vans (Diesel)",
        category: "Mobile Combustion",
        scope: "Scope 1",
        location: "Cape Town Plant",
        consumption: "62,000 L Diesel / yr",
        factor: "2.68 kg CO2e / L",
        emissions: 166.1,
        status: "Verified",
        auditedDate: "2026-06-02",
        notes: "Fleet of 12 regional distribution vans serving Western Cape routes."
      },
      {
        id: "INV-003",
        name: "HVAC Chillers & Refrigerants (R-410A)",
        category: "Fugitive Emissions",
        scope: "Scope 1",
        location: "Lagos HQ",
        consumption: "18 kg Top-up / yr",
        factor: "2,088 kg CO2e / kg",
        emissions: 37.5,
        status: "Action Required",
        auditedDate: "2026-04-20",
        notes: "Central cooling system. Leakage rate estimated at 4.2% annually."
      },
      {
        id: "INV-004",
        name: "Grid Purchased Electricity",
        category: "Purchased Electricity",
        scope: "Scope 2",
        location: "Lagos HQ",
        consumption: "380,000 kWh / yr",
        factor: "0.48 kg CO2e / kWh",
        emissions: 182.4,
        status: "Verified",
        auditedDate: "2026-06-30",
        notes: "Local utility grid supply. High fossil fuel baseline factor."
      },
      {
        id: "INV-005",
        name: "Grid Electricity Supply",
        category: "Purchased Electricity",
        scope: "Scope 2",
        location: "Nairobi Office",
        consumption: "210,000 kWh / yr",
        factor: "0.31 kg CO2e / kWh",
        emissions: 65.1,
        status: "Verified",
        auditedDate: "2026-06-15",
        notes: "Kenya Power grid supply with high hydro/geothermal mix."
      },
      {
        id: "INV-006",
        name: "Grid Electricity - Industrial",
        category: "Purchased Electricity",
        scope: "Scope 2",
        location: "Cape Town Plant",
        consumption: "270,000 kWh / yr",
        factor: "0.92 kg CO2e / kWh",
        emissions: 248.4,
        status: "Pending Review",
        auditedDate: "2026-07-01",
        notes: "Eskom grid supply. Coal-heavy regional factor."
      },
      {
        id: "INV-007",
        name: "Upstream Freight & Distribution",
        category: "Purchased Goods & Services",
        scope: "Scope 3",
        location: "Global Supply Chain",
        consumption: "420,000 ton-km",
        factor: "0.78 kg CO2e / ton-km",
        emissions: 327.6,
        status: "Estimated",
        auditedDate: "2026-03-10",
        notes: "Ocean & road freight for raw component imports from Europe/Asia."
      },
      {
        id: "INV-008",
        name: "Business Travel & Flights",
        category: "Business Travel",
        scope: "Scope 3",
        location: "Global",
        consumption: "185,000 pax-km",
        factor: "0.19 kg CO2e / pax-km",
        emissions: 35.2,
        status: "Verified",
        auditedDate: "2026-06-25",
        notes: "Long-haul executive flights and regional African commuter routes."
      },
      {
        id: "INV-009",
        name: "Cloud Infrastructure & Data Centers",
        category: "Purchased Services",
        scope: "Scope 3",
        location: "AWS / Azure Cloud",
        consumption: "125,000 kWh compute",
        factor: "0.22 kg CO2e / kWh",
        emissions: 27.5,
        status: "Verified",
        auditedDate: "2026-07-12",
        notes: "Hosted corporate ERP, analytics engines, and telemetry storage."
      }
    ]
  },
  "Lagos Branch": {
    kpis: {
      totalCarbon: { value: "450", trend: "-6.1%", text: "-6.1% trend" },
      reductionProgress: { value: "52%", progress: 52, text: "OF LOCAL GOAL" },
      scope1_2: { value: "180", badge: "Direct & Energy" },
      scope3: { value: "270", text: "Estimated local baseline" }
    },
    evolution: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      scope1: [30, 45, 25, 55, 40, 60],
      scope2: [70, 85, 65, 95, 80, 105]
    },
    sources: {
      labels: ["Electricity", "Logistics", "Buildings", "Other"],
      values: [190, 110, 90, 60]
    },
    proposals: [
      {
        title: "Lagos Solar Roof Project",
        impact: "High Impact",
        desc: "Install rooftop solar arrays to replace diesel generators.",
        roi: "ROI 24 months",
        cost: "$110,000",
        reduction: "150 tCO2e/yr",
        steps: [
          "Structural roof assessment",
          "Engineering and PV array design",
          "Inverter room setup & wiring",
          "Integration with existing power grid"
        ]
      },
      {
        title: "AC Energy Management",
        impact: "Medium Impact",
        desc: "Smart thermostats in HQ building to reduce peak loads.",
        roi: "ROI 8 months",
        cost: "$6,500",
        reduction: "22 tCO2e/yr",
        steps: [
          "Audit current HVAC units",
          "Installation of IoT smart thermostats",
          "Programming automated temperature schedules"
        ]
      }
    ],
    sites: [
      { name: "Lagos HQ", country: "Nigeria", emissions: 450, status: "Audit Complete" }
    ],
    inventory: [
      {
        id: "INV-101",
        name: "Backup Diesel Generators (500kVA)",
        category: "Stationary Combustion",
        scope: "Scope 1",
        location: "Lagos HQ",
        consumption: "45,000 L Diesel / yr",
        factor: "2.68 kg CO2e / L",
        emissions: 120.6,
        status: "Verified",
        auditedDate: "2026-05-14",
        notes: "Primary power fallback during local grid outages."
      },
      {
        id: "INV-102",
        name: "HVAC Chillers & Refrigerants (R-410A)",
        category: "Fugitive Emissions",
        scope: "Scope 1",
        location: "Lagos HQ",
        consumption: "18 kg Top-up / yr",
        factor: "2,088 kg CO2e / kg",
        emissions: 37.5,
        status: "Action Required",
        auditedDate: "2026-04-20",
        notes: "Central cooling system. Leakage rate estimated at 4.2%."
      },
      {
        id: "INV-103",
        name: "Grid Purchased Electricity",
        category: "Purchased Electricity",
        scope: "Scope 2",
        location: "Lagos HQ",
        consumption: "380,000 kWh / yr",
        factor: "0.48 kg CO2e / kWh",
        emissions: 182.4,
        status: "Verified",
        auditedDate: "2026-06-30",
        notes: "Local utility grid supply."
      },
      {
        id: "INV-104",
        name: "Commuter & Shuttle Vans",
        category: "Mobile Combustion",
        scope: "Scope 3",
        location: "Lagos Branch",
        consumption: "35,000 L Gasoline / yr",
        factor: "2.31 kg CO2e / L",
        emissions: 80.9,
        status: "Verified",
        auditedDate: "2026-06-18",
        notes: "Staff transport shuttles across Lagos metropolitan area."
      }
    ]
  },
  "Nairobi Office": {
    kpis: {
      totalCarbon: { value: "310", trend: "-1.8%", text: "-1.8% trend" },
      reductionProgress: { value: "80%", progress: 80, text: "OF LOCAL GOAL" },
      scope1_2: { value: "90", badge: "Direct & Energy" },
      scope3: { value: "220", text: "Estimated local baseline" }
    },
    evolution: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      scope1: [15, 20, 18, 25, 22, 28],
      scope2: [45, 55, 42, 60, 50, 62]
    },
    sources: {
      labels: ["Electricity", "Logistics", "Buildings", "Other"],
      values: [120, 90, 60, 40]
    },
    proposals: [
      {
        title: "Kenya E-Mobility Transition",
        impact: "High Impact",
        desc: "Convert local sales delivery fleet to electric scooters.",
        roi: "ROI 14 months",
        cost: "$40,000",
        reduction: "60 tCO2e/yr",
        steps: [
          "Purchase of 15 electric scooters",
          "Installation of fast-charging stations at Nairobi HQ",
          "Fleet tracking integration"
        ]
      }
    ],
    sites: [
      { name: "Nairobi Office", country: "Kenya", emissions: 310, status: "Audit Complete" }
    ],
    inventory: [
      {
        id: "INV-201",
        name: "Grid Electricity Supply",
        category: "Purchased Electricity",
        scope: "Scope 2",
        location: "Nairobi Office",
        consumption: "210,000 kWh / yr",
        factor: "0.31 kg CO2e / kWh",
        emissions: 65.1,
        status: "Verified",
        auditedDate: "2026-06-15",
        notes: "Kenya Power grid supply with high hydro/geothermal mix."
      },
      {
        id: "INV-202",
        name: "Delivery Fleet - Motorcycles",
        category: "Mobile Combustion",
        scope: "Scope 1",
        location: "Nairobi Office",
        consumption: "12,000 L Gasoline / yr",
        factor: "2.31 kg CO2e / L",
        emissions: 27.7,
        status: "Verified",
        auditedDate: "2026-05-30",
        notes: "Sales and client document delivery fleet."
      },
      {
        id: "INV-203",
        name: "Paper & Office Supplies Procurement",
        category: "Purchased Goods",
        scope: "Scope 3",
        location: "Nairobi Office",
        consumption: "14,000 kg paper",
        factor: "0.95 kg CO2e / kg",
        emissions: 13.3,
        status: "Estimated",
        auditedDate: "2026-04-11",
        notes: "Recycled and virgin paper supplies."
      }
    ]
  }
};
