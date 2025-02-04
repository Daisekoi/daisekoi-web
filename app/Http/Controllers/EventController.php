<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log; 

class EventController extends Controller
{
    private $filePathEvents = 'app/private/events.json';
        // Fungsi untuk mengambil data event dari file JSON
        public function getEvents()
        {
        
            $path = storage_path($this->filePathEvents);
            
            if (!File::exists($path)) {
                return response()->json([], 404); // Kembalikan array kosong jika file tidak ada
            }
    
            $data = File::get($path);
            $events = json_decode($data, true); // Decode JSON menjadi array
    
            return response()->json($events, 200); // Kembalikan data event
        }
        
        // Fungsi untuk menyimpan data event ke file JSON
        public function saveEvent(Request $request)
        {
            $request->merge([
                'startDate' => $request->startDate ?? "",
                'startTime' => $request->startTime ?? "",
                'endDate' => $request->endDate ?? "",
                'endTime' => $request->endTime ?? "",
                'KetEvents' => $request->KetEvents ?? "",
                'hargaTiket' => $request->hargaTiket !== null && $request->hargaTiket !== "" ? $request->hargaTiket : "Free",
                'poster' => $request->poster ?? "",
            ]);
        
            $request->validate([
                'idEvent' => 'required|string',
                'nameEvents' => 'required|string',
                'startDate' => 'nullable', 'date_format:Y-m-d',
                'startTime' => 'nullable', 'date_format:H:i:s', // Format HH:MM:SS
                'endDate' => 'nullable', 'date_format:Y-m-d',
                'endTime' => 'nullable', 'date_format:H:i:s', // Format HH:MM:SS
                'location' => 'required|string',
                'poster' => 'nullable|string',
                'hargaTiket' => 'nullable|string',
                'KetEvents' => 'nullable|string',
            ]);
        
            $path = storage_path($this->filePathEvents);
            $events = [];
        
            // Jika file ada, ambil data yang ada
            if (File::exists($path)) {
                $data = File::get($path);
                $events = json_decode($data, true);
            }
        
            // Tambahkan event baru
            $events[] = $request->all();
        
            // Simpan kembali ke file
            File::put($path, json_encode($events, JSON_PRETTY_PRINT));
        
            return response()->json(['message' => 'Event saved successfully'], 201);
        }

        public function updateEvent(Request $request, $idEvent)
        {
            $request->merge([
                'startDate' => $request->startDate ?? "",
                'startTime' => $request->startTime ?? "",
                'endDate' => $request->endDate ?? "",
                'endTime' => $request->endTime ?? "",
                'KetEvents' => $request->KetEvents ?? "",
                'hargaTiket' => $request->hargaTiket !== null && $request->hargaTiket !== "" ? $request->hargaTiket : "Free",
                'poster' => $request->poster ?? "",
            ]);
        
            $request->validate([
                'idEvent' => 'required|string',
                'nameEvents' => 'required|string',
                'startDate' => 'nullable', 'date_format:Y-m-d',
                'startTime' => 'nullable', 'date_format:H:i:s', // Format HH:MM:SS
                'endDate' => 'nullable', 'date_format:Y-m-d',
                'endTime' => 'nullable', 'date_format:H:i:s', // Format HH:MM:SS
                'location' => 'required|string',
                'poster' => 'nullable|string',
                'hargaTiket' => 'nullable|string',
                'KetEvents' => 'nullable|string',
            ]);
        
            $path = storage_path($this->filePathEvents);
        
            if (!File::exists($path)) {
                return response()->json(['message' => 'File not found'], 404);
            }
        
            try {
                $data = File::get($path);
                $events = json_decode($data, true);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Failed to read events file'], 500);
            }
        
            $eventIndex = null;
            foreach ($events as $index => $event) {
                if ($event['idEvent'] === $idEvent) {
                    $eventIndex = $index;
                    break;
                }
            }
        
            if ($eventIndex === null) {
                return response()->json(['message' => 'Event not found'], 404);
            }
        
            // Update only the fields present in the request
            foreach ($request->all() as $key => $value) {
                if (array_key_exists($key, $events[$eventIndex])) {
                    $events[$eventIndex][$key] = $value;
                }
            }
        
            try {
                File::put($path, json_encode($events, JSON_PRETTY_PRINT));
            } catch (\Exception $e) {
                return response()->json(['message' => 'Failed to save updated events'], 500);
            }
        
            return response()->json([
                'message' => 'Event updated successfully',
                'event' => $events[$eventIndex],
            ], 200);
        }

    // Fungsi untuk menghapus event
    public function deleteEvent($id)
    {
        $path = storage_path($this->filePathEvents);
    
        if (!File::exists($path)) {
            return response()->json(['message' => 'File not found'], 404);
        }
    
        $data = File::get($path);
        $events = json_decode($data, true);
    
        // Cari event berdasarkan ID dan hapus
        $eventIndex = null;
        foreach ($events as $index => $event) {
            if ($event['idEvent'] === $id) {
                $eventIndex = $index;
                break;
            }
        }
    
        if ($eventIndex === null) {
            return response()->json(['message' => 'Event not found'], 404);
        }
    
        // Hapus event
        array_splice($events, $eventIndex, 1);
    
        // Simpan perubahan kembali ke file
        File::put($path, json_encode($events, JSON_PRETTY_PRINT));
    
        return response()->json(['message' => 'Event deleted successfully'], 200);
    }
}
