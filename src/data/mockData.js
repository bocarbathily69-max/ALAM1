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
    ]
  }
};
