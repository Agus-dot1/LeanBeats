import React from "react";

interface AddDialogProps {
    open: boolean;
    onClose: () => void;
}

const AddDialog = ({open, onClose}: AddDialogProps) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-[#1e1e1e] p-6 rounded-lg w-full max-w-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium">Add New Product</h2>
                    <button 
                        onClick={onClose}
                        className="text-white/60 hover:text-white"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="text-sm text-white/60">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            placeholder="e.g., Summer Vibes Beat"
                            className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-sm focus:outline-none focus:border-white/20" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="type" className="text-sm text-white/60">Type</label>
                        <select 
                            id="type" 
                            className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-sm focus:outline-none focus:border-white/20"
                        >
                            <option value="beat">Beat</option>
                            <option value="drumkit">Drumkit</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="price" className="text-sm text-white/60">Price ($)</label>
                        <input 
                            type="number" 
                            id="price" 
                            className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-sm focus:outline-none focus:border-white/20" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="audio" className="text-sm text-white/60">Audio File</label>
                        <div className="w-full p-4 border border-dashed border-white/20 rounded-md text-center">
                            <p className="text-sm text-white/60 mb-2">Drag & drop your file here, or</p>
                            <button className="text-sm text-white bg-[#2c2c2c] px-4 py-1 rounded-md hover:bg-[#3c3c3c]">
                                Select Audio
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="cover" className="text-sm text-white/60">Cover Image</label>
                        <div className="w-full p-4 border border-dashed border-white/20 rounded-md text-center">
                            <p className="text-sm text-white/60 mb-2">Drag & drop your file here, or</p>
                            <button className="text-sm text-white bg-[#2c2c2c] px-4 py-1 rounded-md hover:bg-[#3c3c3c]">
                                Select Image
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="text-sm text-white/60">Description</label>
                        <textarea 
                            id="description" 
                            rows={3}
                            className="w-full p-2 bg-[#2c2c2c] border border-white/10 rounded-md text-sm focus:outline-none focus:border-white/20" 
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-md bg-[#2c2c2c] hover:bg-[#3c3c3c] transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-4 py-2 text-sm rounded-md bg-primary-200 hover:bg-primary-300 transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddDialog;