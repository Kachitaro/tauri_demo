fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_printer::init())
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn my_custom_command() -> String {
  "Hello from Rust!".into()
}