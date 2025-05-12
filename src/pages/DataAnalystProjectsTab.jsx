import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaChartLine, FaBrain, FaSearch, FaCogs } from "react-icons/fa";

const projectSections = [
  {
    key: "classification",
    title: "Classification & Prediction",
    icon: <FaBrain />, 
    projects: [
      "Customer Churn at a Wizarding School",
      "Sales Forecasting for a Retro Vinyl Shop",
      "Loan Default Prediction for Student Loans at Hogwarts",
      "Employee Attrition in a Zoo Veterinary Department",
      "Stock Market Trends for Disney Merch",
      "Credit Risk of Dental Startups",
      "Retail Demand at a Space-Themed Candy Store",
      "Fraud Detection at an Aquarium Gift Shop",
      "Customer Lifetime Value in Theme Park Loyalty Programs",
      "Product Return Prediction for Plush Toy Vendors"
    ]
  },
  {
    key: "eda",
    title: "Exploratory Data Analysis (EDA)",
    icon: <FaSearch />, 
    projects: [
      "E-Commerce Sales at a Fantasy Fashion Boutique",
      "Customer Segmentation at a Carnival",
      "Understanding Social Media Trends Around Starbucks",
      "Public Transport Data Near Theme Parks",
      "Trends in Airbnb Treehouses",
      "Financial Statements of Independent Comic Book Stores",
      "Biogas Energy Consumption at Animal Shelters",
      "Employee Evaluation at a Retirement Community",
      "Sentiment Analysis of Reviews at Petting Zoos"
    ]
  },
  {
    key: "time_series",
    title: "Time Series Analysis & Forecasting",
    icon: <FaChartLine />,
    projects: [
      "Sales Trend of Ice Cream Flavors at Beach Kiosks",
      "Website Traffic for Health Wearable Apps",
      "Forecasting Hotel Room Demand in Fantasy Inns",
      "Weather Pattern Analysis for Hiking Resorts",
      "Passenger Forecasting at Water Parks",
      "Product Demand for Smart Toothbrushes",
      "Forecasting Rental Demand of Disney-Themed Airbnbs",
      "Stock Price Movements of Pop Culture Brands",
      "Electricity Use in Aquatic Hospitals"
    ]
  },
  {
    key: "business_optimization",
    title: "Business Analytics & Optimization",
    icon: <FaCogs />,
    projects: [
      "Market Basket Analysis for Candy Stores",
      "Price Optimization for Plush Toys",
      "Supply Chain Analysis for Seasonal Theme Park Snacks",
      "Human Resource Analysis in Pediatric Hospitals",
      "Financial Risk in Healthcare Startups",
      "KPI Monitoring for Zoo Operations",
      "Customer Retention at Fantasy Cafés",
      "Social Media Campaign Evaluation at Aquariums",
      "Resource Planning in Dental Offices",
      "Operational Analysis of Publix vs Aldi"
    ]
  }
];

export default function DataAnalystProjectsTab() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Data Analyst Projects</h1>
      <Tabs defaultValue="classification" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 mb-4">
          {projectSections.map(section => (
            <TabsTrigger key={section.key} value={section.key}>
              <div className="flex items-center space-x-2">
                {section.icon}<span>{section.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {projectSections.map(section => (
          <TabsContent key={section.key} value={section.key}>
            <ScrollArea className="h-[600px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.projects.map((title, i) => (
                  <Card key={i} className="hover:shadow-xl transition-all">
                    <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-2">{title}</h2>
                      <p className="text-muted-foreground">Project coming soon. Click to see implementation in Python, R, SQL.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
add Data Analyst Projects Tab page
