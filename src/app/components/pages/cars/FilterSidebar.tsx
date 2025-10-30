"use client"

import { X } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Filters Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">Clear all</button>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
          <span>$10,000 - $60,000</span>
          <X className="w-4 h-4 cursor-pointer hover:text-foreground" />
        </div>
        <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
          <span>Crossover</span>
          <X className="w-4 h-4 cursor-pointer hover:text-foreground" />
        </div>
        <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
          <span>Gold</span>
          <X className="w-4 h-4 cursor-pointer hover:text-foreground" />
        </div>
        <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
          <span>Gray</span>
          <X className="w-4 h-4 cursor-pointer hover:text-foreground" />
        </div>
        <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
          <span>Toyota</span>
          <X className="w-4 h-4 cursor-pointer hover:text-foreground" />
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Location</h3>
        <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground cursor-pointer hover:bg-muted">
          <option>Choose location</option>
          <option>New York, NY</option>
          <option>Los Angeles, CA</option>
          <option>Chicago, IL</option>
        </select>
      </div>

      {/* Body Type */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Body Type</h3>
        <div className="space-y-2">
          {["Sedan", "SUV", "Hatchback", "Pickup"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={type === "Pickup"}
                className="w-4 h-4 rounded border-border cursor-pointer"
              />
              <span className="text-sm text-foreground">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Make & Model */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Make & Model</h3>
        <div className="space-y-2">
          <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground cursor-pointer hover:bg-muted">
            <option>Any make</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>BMW</option>
          </select>
          <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground cursor-pointer hover:bg-muted">
            <option>Any model</option>
            <option>Camry</option>
            <option>Accord</option>
            <option>3 Series</option>
          </select>
        </div>
      </div>

      {/* Year */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Year</h3>
        <div className="flex gap-2">
          <select className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground cursor-pointer hover:bg-muted">
            <option>All</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <span className="flex items-center text-muted-foreground">-</span>
          <select className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground cursor-pointer hover:bg-muted">
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price</h3>
        <div className="space-y-3 w-full">
          <input
            type="range"
            min="10000"
            max="50000"
            defaultValue="30000"
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex gap-2">
            <input
              type="number"
              defaultValue="10,000"
              className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground"
            />
            <span className="flex items-center text-muted-foreground">-</span>
            <input
              type="number"
              defaultValue="50,000"
              className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground"
            />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
            <span className="text-sm text-foreground">Negotiated price</span>
          </label>
        </div>
      </div>

      {/* Drive Type */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Drive Type</h3>
        <div className="space-y-2">
          {["AWD/4WD", "Front Wheel Drive", "Rear Wheel Drive"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
              <span className="text-sm text-foreground">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Fuel Type</h3>
        <div className="space-y-2">
          {["Petrol", "Electric", "Diesel"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
              <span className="text-sm text-foreground">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
