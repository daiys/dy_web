import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProducts, saveProduct, deleteProduct } from '../services/storageService';
import { generateProductDescription } from '../services/geminiService';

export const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    features: []
  });

  const loadData = () => {
    setProducts(getProducts());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (product: Product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      loadData();
    }
  };

  const handleAddNew = () => {
    setFormData({
      id: Date.now().toString(),
      name: '',
      category: 'Insulation',
      description: '',
      imageUrl: `https://picsum.photos/800/600?random=${Date.now()}`,
      features: []
    });
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveProduct(formData);
    setIsEditing(false);
    loadData();
  };

  const handleGenerateAI = async () => {
    if (!formData.name) {
      alert("Please enter a product name first.");
      return;
    }
    setLoadingAI(true);
    const desc = await generateProductDescription(formData.name, formData.category);
    setFormData(prev => ({ ...prev, description: desc }));
    setLoadingAI(false);
  };

  if (isEditing) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">
              {formData.id ? 'Edit Product' : 'New Product'}
            </h2>
            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          
          <form onSubmit={handleSave} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-orange focus:ring-brand-orange sm:text-sm shadow-sm"
                  placeholder="e.g. Rockwool Board"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 sm:text-sm"
                >
                  <option>Insulation</option>
                  <option>Scaffolding</option>
                  <option>Fireproofing</option>
                  <option>Coating</option>
                  <option>General</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <button
                  type="button"
                  onClick={handleGenerateAI}
                  disabled={loadingAI}
                  className="text-xs flex items-center bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 transition"
                >
                  {loadingAI ? <i className="fa-solid fa-spinner fa-spin mr-1"></i> : <i className="fa-solid fa-wand-magic-sparkles mr-1"></i>}
                  AI Write
                </button>
              </div>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand-orange focus:ring-brand-orange sm:text-sm shadow-sm"
              />
              <p className="mt-1 text-xs text-gray-500">Click 'AI Write' to auto-generate description based on Name and Category.</p>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700">Image URL</label>
               <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500"
                />
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100">
               <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium mr-3"
               >
                 Cancel
               </button>
               <button
                  type="submit"
                  className="bg-brand-orange text-white hover:bg-orange-700 px-6 py-2 rounded-md text-sm font-medium shadow-sm"
               >
                 Save Product
               </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
                <p className="text-gray-500 mt-1">Manage your website products and descriptions.</p>
            </div>
            <button
                onClick={handleAddNew}
                className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 flex items-center shadow-lg"
            >
                <i className="fa-solid fa-plus mr-2"></i> Add Product
            </button>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id}>
                <div className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                    <div className="flex items-center flex-1 min-w-0">
                        <img className="h-12 w-12 rounded bg-gray-100 object-cover mr-4" src={product.imageUrl} alt="" />
                        <div>
                            <p className="text-sm font-medium text-brand-blue truncate">{product.name}</p>
                            <p className="flex items-center text-xs text-gray-500 mt-1">
                                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.category}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => handleEdit(product)}
                            className="p-2 text-gray-400 hover:text-brand-blue"
                        >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button 
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-gray-400 hover:text-red-500"
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};