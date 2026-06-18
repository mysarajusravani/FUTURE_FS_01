function showProject(project){

const details = document.getElementById("projectDetails");

if(project === "crm"){

details.innerHTML = `
<h2>CRM Dashboard</h2>

<p>
A Lead Management System developed using
HTML, CSS and JavaScript.
</p>

<ul>
<li>Add Leads</li>
<li>Search Leads</li>
<li>Filter Records</li>
<li>Local Storage Support</li>
<li>Responsive Design</li>
</ul>
`;

}

else if(project === "boutique"){

details.innerHTML = `
<h2>Boutique Website</h2>

<p>
Modern fashion boutique website designed
for showcasing products and collections.
</p>

<ul>
<li>Hero Section</li>
<li>Product Gallery</li>
<li>Contact Form</li>
<li>Responsive Layout</li>
<li>Elegant UI Design</li>
</ul>
`;

}

else if(project === "portfolio"){

details.innerHTML = `
<h2>Portfolio Website</h2>

<p>
Professional portfolio website to showcase
skills, projects and resume.
</p>

<ul>
<li>About Section</li>
<li>Skills Section</li>
<li>Projects Showcase</li>
<li>Resume Download</li>
<li>Contact Form</li>
</ul>
`;

}

}