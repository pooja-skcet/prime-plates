// import React, { useState } from 'react';
// import './Admin.css';

// const Admin = () => {
//   const [menuItem, setMenuItem] = useState({
//     name: '',
//     description: '',
//     packageType: 'standard',
//     menuType: 'breakfast',
//     type:'veg',
//     price: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMenuItem({ ...menuItem, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You would typically send `menuItem` to your backend here
//     console.log('Menu item added:', menuItem);
//     // Reset form
//     setMenuItem({
//       name: '',
//       description: '',
//       packageType: 'standard',
//       menuType: 'breakfast',
//       price: ''
//     });
//   };

//   return (
//     <div>
//     <div>
//     <header className="header7">
//       <h2>PrimePlates</h2>
//       <nav className="navigation7">
//       <h4><a href="/Home">HomePage</a></h4>
        
//       </nav>
//     </header>
//     </div>
//     <div className="newsection1">
//     <div className="admin-form-container1">
    
//       <h2>Menu Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={menuItem.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Description:
//             <textarea
//               name="description"
//               value={menuItem.description}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Package Type:
//             <select
//               name="packageType"
//               value={menuItem.packageType}
//               onChange={handleChange}
//               required
//             >
//               <option value="lite">Lite</option>
//               <option value="standard">Standard</option>
//               <option value="premium">Premium</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Menu Type:
//             <select
//               name="menuType"
//               value={menuItem.menuType}
//               onChange={handleChange}
//               required
//             >
//               <option value="breakfast">Breakfast</option>
//               <option value="lunch">Lunch</option>
//               <option value="dinner">Dinner</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Veg/Nonveg
//             <select
//               name="menuType"
//               value={menuItem.type}
//               onChange={handleChange}
//               required
//             >
//               <option value="veg">Veg</option>
//               <option value="nonveg">Nonveg</option>
             
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Price:
//             <input
//               type="number"
//               name="price"
//               value={menuItem.price}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <button type="submit">Add Menu Item</button>
//       </form>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Admin;
// src/components/Admin.js
import React, { useState } from 'react';
import logo from '../NewHome/Images/Logo (1).png'
import userService from '../Service/AxiosService'; // Import the userService module
import './Admin.css';

const Admin = () => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    packageType: 'standard',
    menuType: 'breakfast',
    type: 'veg',
    price: '',
    image:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.addMenuItem(menuItem);
      console.log('Menu item added:', response);
      alert('Menu item added successfully!');
      // Reset form
      setMenuItem({
        name: '',
        description: '',
        packageType: 'standard',
        menuType: 'breakfast',
        type: 'veg',
        price: ''
      });
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div>
    <header className="header2">
    <img src={logo} alt="primeplates"/>
    <nav className="navigation2">
      <a href="/Home">Home</a>
      
    </nav>
  </header>

      <div className="newsection1">
        <div className="admin-form-container1">
          <h2>Add Menu</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={menuItem.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Description:
                <textarea
                  name="description"
                  value={menuItem.description}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Package Type:
                <select
                  name="packageType"
                  value={menuItem.packageType}
                  onChange={handleChange}
                  required
                >
                  
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="student">Student</option>
                  <option value="health">Health</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Menu Type:
                <select
                  name="menuType"
                  value={menuItem.menuType}
                  onChange={handleChange}
                  required
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Veg/Non-veg
                <select
                  name="type"
                  value={menuItem.type}
                  onChange={handleChange}
                  required
                >
                  <option value="veg">Veg</option>
                  <option value="nonveg">Nonveg</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={menuItem.price}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
            <label>
              Image Path:
              <input
                type="text"
                name="image"
                value={menuItem.image}
                onChange={handleChange}
                required
              />
            </label>
          </div>
            <button type="submit">Add Menu Item</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
