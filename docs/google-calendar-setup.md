# Konfiguracja Google Calendar - Rezerwacja Spotkań

## Przegląd

Aplikacja używa Google Calendar Appointment Schedules do umożliwienia klientom rezerwacji spotkań bezpośrednio z przycisku "Umów spotkanie" na stronie.

## Jak skonfigurować Google Calendar Appointment Schedule

### Krok 1: Utwórz harmonogram spotkań w Google Calendar

1. Przejdź do [Google Calendar](https://calendar.google.com/)
2. Kliknij ikonę ustawień (⚙️) w prawym górnym rogu
3. Wybierz **"Appointment schedules"** z menu
4. Kliknij **"Create"** aby utworzyć nowy harmonogram spotkań

### Krok 2: Skonfiguruj szczegóły harmonogramu

1. **Nazwa spotkania**: Podaj nazwę (np. "Konsultacja z QonnectOne")
2. **Czas trwania**: Ustaw czas trwania spotkania (np. 30 minut, 1 godzina)
3. **Dostępność**: Określ kiedy jesteś dostępny na spotkania
   - Dni tygodnia
   - Godziny dostępności
   - Przerwy między spotkaniami
4. **Lokalizacja**: Ustaw czy spotkanie będzie:
   - Online (Google Meet)
   - Telefonicznie
   - W biurze
5. **Opis**: Dodaj opis spotkania, który zobaczy klient
6. **Formularz rezerwacji**: Skonfiguruj jakie informacje chcesz zbierać od klientów

### Krok 3: Pobierz link do rezerwacji

1. Po utworzeniu harmonogramu, kliknij na niego
2. Kliknij przycisk **"Get booking page link"** lub **"Udostępnij"**
3. Skopiuj wygenerowany URL - będzie w formacie:
   ```
   https://calendar.google.com/calendar/appointments/schedules/UNIQUE_SCHEDULE_ID
   ```

### Krok 4: Zaktualizuj konfigurację w aplikacji

1. Otwórz plik: `/src/config/calendar.ts`
2. Zamień przykładowy URL na swój rzeczywisty link:

```typescript
export const GOOGLE_CALENDAR_APPOINTMENT_URL = 
  'https://calendar.google.com/calendar/appointments/schedules/TWÓJ_SCHEDULE_ID';
```

3. Zapisz plik

### Krok 5: Zbuduj i wdróż aplikację

Po zapisaniu zmian:

```bash
npm run build
npm run start
```

## Gdzie używany jest przycisk "Umów spotkanie"

Przycisk "Umów spotkanie" pojawia się w następujących miejscach:

1. **Strona główna** (`/`) - w sekcji CTA (Call to Action)
2. **Strona Modele współpracy** (`/modele-wspolpracy`) - w sekcji kontaktowej

## Testowanie

1. Uruchom aplikację lokalnie: `npm run dev`
2. Kliknij przycisk "Umów spotkanie"
3. Sprawdź czy otwiera się właściwy formularz rezerwacji w Google Calendar

## Dodatkowe wskazówki

- **Powiadomienia**: Skonfiguruj powiadomienia email w Google Calendar, aby dostawać informacje o nowych rezerwacjach
- **Integracja z Google Meet**: Włącz automatyczne tworzenie linków do spotkań online
- **Limity**: Ustaw maksymalną liczbę spotkań dziennie, jeśli potrzeba
- **Strefa czasowa**: Upewnij się, że strefa czasowa jest właściwie skonfigurowana

## Troubleshooting

### Problem: Link nie działa
- Sprawdź czy harmonogram jest **publiczny** i **aktywny**
- Zweryfikuj czy skopiowany URL jest kompletny

### Problem: Klienci nie mogą rezerwować spotkań
- Sprawdź ustawienia dostępności w Google Calendar
- Upewnij się, że określiłeś dostępne godziny

### Problem: Nie dostajesz powiadomień
- Sprawdź ustawienia powiadomień w Google Calendar
- Zweryfikuj czy adres email jest poprawny

## Powiązane pliki

- **Konfiguracja**: `/src/config/calendar.ts`
- **Komponenty używające**:
  - `/src/components/CTASection.tsx`
  - `/src/app/modele-wspolpracy/page.tsx`
