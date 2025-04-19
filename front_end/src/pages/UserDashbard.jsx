import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to your Dashboard</h1>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm text-gray-500">Current GPA</h2>
            <p className="text-2xl font-bold text-blue-600">3.72</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm text-gray-500">Registered Semesters</h2>
            <p className="text-2xl font-bold text-blue-600">6</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm text-gray-500">Recommendations</h2>
            <p className="text-2xl font-bold text-blue-600">4</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm text-gray-500">Department Match</h2>
            <p className="text-2xl font-bold text-blue-600">90%</p>
          </div>
        </div>

        {/* Actions / Navigation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Input Grades"
            description="Enter your semester results to track your academic progress."
            to="/grades"
          />
          <DashboardCard
            title="Course Recommendations"
            description="View AI-powered course recommendations for your next semester."
            to="/recommendations"
          />
          <DashboardCard
            title="Department Suggestion"
            description="Get insights into which department best suits your strengths."
            to="/department-recommendation"
          />
          <DashboardCard
            title="Career Insights"
            description="Explore possible career paths and skills based on your academic data."
            to="/career-info"
          />
          <DashboardCard
            title="Study Resources"
            description="See what top-performing students are using to succeed."
            to="/resources"
          />
          <DashboardCard
            title="Profile Settings"
            description="Update your personal info and account settings."
            to="/profile"
          />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, description, to }) => (
  <Link
    to={to}
    className="bg-white hover:bg-blue-50 p-6 rounded-lg shadow transition duration-300 border border-transparent hover:border-blue-300"
  >
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </Link>
);

export default UserDashboard;
